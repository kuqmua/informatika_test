const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
const port = 8888;

app.listen(port, () => {
  console.log("сервер запустился на port", port);
});
app.get("/", function (req, res) {
  res.send("Привет из Expresssss");
});

app.get("/privet", (req, res) => {
  const privet = { title: "Привет" };
  res.json(privet);
});

app.get("/table", (req, res) => {
  const table = [
    {
      id: 0,
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      date: "1929-1940",
    },
    {
      id: 1,
      title: "Преступление и наказание",
      author: "Федор Достоевский",
      date: "1866",
    },
    {
      id: 2,
      title: "Мёртвые души",
      author: "Николай Гоголь",
      date: "1842",
    },
  ];
  res.json(table);
});

app.get("/author/:id", (req, res) => {
  const authors = [
    {
      id: 0,
      author: "Михаил Булгаков",
      dateOfBirth: "15 мая 1891",
      dateOfDeath: "10 марта 1940",
      imgUrl: "http://localhost:8888/bulgakov.webp",
    },
    {
      id: 1,
      author: "Федор Достоевский",
      dateOfBirth: "11 ноября 1821",
      dateOfDeath: "9 февраля 1881",
      imgUrl: "http://localhost:8888/dostoevski.jpg",
    },
    {
      id: 2,
      author: "Николай Гоголь",
      dateOfBirth: "9 февраля 1881",
      dateOfDeath: "4 марта 1852",
      imgUrl: "http://localhost:8888/gogol.jpg",
    },
  ];
  res.json(authors[req.params.id]);
});

/*
app.get("/author/0", (req, res) => {
  const author = {
    id: 0,
    author: "Михаил Булгаков",
    dateOfBirth: "15 мая 1891",
    dateOfDeath: "10 марта 1940",
    imgUrl: "http://localhost:8888/bulgakov.webp",
  };
  res.json(author);
});

app.get("/author/1", (req, res) => {
  const author = {
    id: 1,
    author: "Федор Достоевский",
    dateOfBirth: "11 ноября 1821",
    dateOfDeath: "9 февраля 1881",
    imgUrl: "http://localhost:8888/dostoevski.jpg",
  };
  res.json(author);
});

app.get("/author/2", (req, res) => {
  author = {
    id: 2,
    author: "Николай Гоголь",
    dateOfBirth: "9 февраля 1881",
    dateOfDeath: "4 марта 1852",
    imgUrl: "http://localhost:8888/gogol.jpg",
  };
  res.json(author);
});
*/
