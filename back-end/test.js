const fetch = require("node-fetch");

async function callAPI() {
  try {
    const response = await fetch(
      "https://us-central1-product-hack-2024.cloudfunctions.net/app/post",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "prompt-1",
          user: "user",
          image: "image",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

callAPI();
