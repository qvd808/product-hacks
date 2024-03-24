const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
var admin = require("firebase-admin");
const multer = require("multer");
var serviceAccount = require("./product-hack-2024-firebase-adminsdk-1sjsq-971eb9bf75.json");
const fileParser = require('express-multipart-file-parser')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://product-hack-2024.appspot.com",
});

const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
var bucket = admin.storage().bucket();

app.use(cors({ origin: true }));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(fileParser)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.get("/", (req, res) => {
  return res.status(200).send("Hello world");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // let file = req.file;
    // const bucketFile = bucket.file("uploads/" + file.originalname);
    // await bucketFile.save(file.buffer, {
    //   metadata: {
    //     contentType: file.mimetype,
    //   },
    // });

    // await bucketFile.makePublic();

    // const url = `https://storage.googleapis.com/${bucket.name}/${bucketFile.name}`;

    // console.log(url);

    return res.status(200).send("File uploaded successfully");
  } catch (error) {
    console.error(error);
    return "Error not found";
  }
});

app.post('/file',async (req, res) => {
  const {
    fieldname,
    originalname,
    encoding,
    mimetype,
    buffer,
  } = req.files[0]
    const bucketFile = bucket.file("uploads/" + originalname);

    await bucketFile.save(buffer, {
      metadata: {
        contentType: mimetype,
      },
    });
    await bucketFile.makePublic();

    const url = `https://storage.googleapis.com/${bucket.name}/${bucketFile.name}`;

    res.json(url);
})

app.post("/prompt", async (req, res) => {
  const db = admin.firestore();

  const { topic, isSponsored, whenClosed } = req.body;

  console.log(topic);

  const prompt_collection = await db.collection("prompts").get();
  let i = 0;
  prompt_collection.forEach((doc) => {
    i++;
  });

  await db
    .collection("prompts")
    .doc("prompt-" + (i + 1).toString())
    .set({
      topic: topic,
      numOfPosts: 0,
      isSponsored: isSponsored,
      whenClosed: whenClosed,
    });

  return res.json("Prompt added successfully");
});

app.get("/prompt", async (req, res) => {
  const db = admin.firestore();
  const snapshot = await db.collection("prompts").get();

  const result = [];

  snapshot.forEach((doc) => {
    result.push({
      id: doc.id,
      data: doc.data(),
      posts: [],
    });
  });

  for (let i = 0; i < result.length; i++) {
    const posts = await db
      .collection("prompts")
      .doc(result[i].id)
      .collection("posts")
      .get();

    posts.forEach((doc) => {
      result[i].posts.push({ ...doc.data(), id: doc.id });
    });
  }

  return res.json(result);
});

app.get("/post", async (req, res) => {
  const db = admin.firestore();
  const { id } = req.query;

  const posts = await db
    .collection("prompts")
    .doc(id)
    .collection("posts")
    .get()
    .catch((error) => {
      console.error(error);
      return res.status(500).send("Error fetching data");
    });

  const result = [];

  posts.forEach((doc) => {
    result.push({
      id: doc.id,
      data: doc.data(),
    });
    console.log(doc.id, "=>", doc.data());
  });

  return res.json(result);
});

app.post("/post", async (req, res) => {
  const db = admin.firestore();
  const { id, user, image, location, caption } = req.body;

  const posts = await db
    .collection("prompts")
    .doc(id)
    .collection("posts")
    .get()
    .catch((error) => {
      console.error(error);
      return res.status(500).send("Error fetching data");
    });

  let i = 0;

  posts.forEach((doc) => {
    i++;
    console.log(doc.id, "=>", doc.data());
  });

  const temp = await db
    .collection("prompts")
    .doc(id)
    .set(
      {
        numOfPosts: i + 1,
      },
      { merge: true }
    );

  const result = await db
    .collection("prompts")
    .doc(id)
    .collection("posts")
    .doc("post-" + (i + 1).toString())
    .set({
      id: "post-" + (i + 1).toString(),
      user: user,
      image: image,
      location: location,
      vote: 0,
      caption: caption,
    });

  res.json(result);
});

app.post("/post/up-vote", async (req, res) => {
  const db = admin.firestore();
  const { id, postId } = req.body;

  const post = await db
    .collection("prompts")
    .doc(id)
    .collection("posts")
    .doc(postId)
    .get()
    .catch((error) => {
      console.error(error);
      return res.status(500).send("Error fetching data");
    });

  const temp = await db
    .collection("prompts")
    .doc(id)
    .collection("posts")
    .doc(postId)
    .set(
      {
        vote: post.data().vote + 1,
      },
      { merge: true }
    );

  res.json(temp);
});

app.post("/post/down-vote", async (req, res) => {
  const db = admin.firestore();
  const { id, postId } = req.body;

  const post = await db
    .collection("prompts")
    .doc(id)
    .collection("posts")
    .doc(postId)
    .get()
    .catch((error) => {
      console.error(error);
      return res.status(500).send("Error fetching data");
    });

  const temp = await db
    .collection("prompts")
    .doc(id)
    .collection("posts")
    .doc(postId)
    .set(
      {
        vote: post.data().vote - 1,
      },
      { merge: true }
    );

  res.json(temp);
});

exports.app = functions.https.onRequest(app);
