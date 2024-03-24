const data = {
  prompts: [
    {
      id: "1",
      topic: "The craziest things you can do with $5.50 CAD.",
      numOfPosts: 2,
      isSponsored: true,
      whenClosed: 3,
      post: [
        {
          id: "1",
          user: "BabyBottom",
          location: "Granville Island",
          image: "./images/o.jpg",
          vote: 200,
          caption: "Fun day on Grouse",
          comments: [
            {
              id: "1",
              user: "Laurehj",
              comment: "Lol this is so good!",
            },
            {
              id: "2",
              user: "Laurehj",
              comment: "Lol this is so good!",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      topic: "Show us where you and your ex broke up.",
      post: [
        {
          id: "1",
          user: "Milk113",
          location: "Granville Island",
          image: "./images/o.jpg",
          vote: 100,
          comments: [
            {
              id: "1",
              user: "Laurehj",
              comment: "Lol this is so good!",
            },
          ],
        },
      ],
    },
  ],
};

const API = "https://us-central1-product-hack-2024.cloudfunctions.net/app";

export { data, API };
