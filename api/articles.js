// server/pages/api/articles.js

export default function handler(req, res) {
  const articles = [
    {
      id: 1,
      title: "First Article",
      content: "This is the content of the first article.",
      image: "/images/article1.jpg",
    },
    {
      id: 2,
      title: "Second Article",
      content: "This is the content of the second article.",
      image: "/images/article2.jpg",
    },
    {
      id: 3,
      title: "Third Article",
      content: "This is the content of the third article.",
      image: "/images/article3.jpg",
    },
  ];

  res.status(200).json(articles);
}
