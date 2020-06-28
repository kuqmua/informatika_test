const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = 8888;

app.get("/", function (req, res) {
  res.send("Привет из Express");
});

app.listen(port, () => {
  console.log("сервер запустился на port", port);
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

app.get("/authors", (req, res) => {
  const table = {
    id: 0,
    author: "Михаил Булгаков",
    dateOfBirth: "15 мая 1891",
    dateOfDeath: "10 марта 1940",
    imgUrl:
      "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkJocEH2XAirMFqxE9vwZJkKaKTM5SRkZCeTgDn6uOyic",
  };
  res.json(table);
});
/*

 const table = [
    {
      id: 0,
      author: "Михаил Булгаков",
      dateOfBirth: "15 мая 1891",
      dateOfDeath: "10 марта 1940",
      imgUrl:
      "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkJocEH2XAirMFqxE9vwZJkKaKTM5SRkZCeTgDn6uOyic",
    },
    {
      id: 1,
      author: "Федор Достоевский",
      dateOfBirth: "11 ноября 1821",
      dateOfDeath: "9 февраля 1881",
      imgUrl:
      "https://starsity.ru/wp-content/uploads/2019/12/08021103-378x480.jpg",
    },
    {
      id: 2,
      author: "Николай Гоголь",
      dateOfBirth: "9 февраля 1881",
      dateOfDeath: "4 марта 1852",
      imgUrl:
      "https://pbs.twimg.com/media/EYso5MTX0AErnyv.jpg",
    },
  ];

*/
