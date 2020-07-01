import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import TableInfo from "./tableInfo.js";
import AuthorPage from "./authorPage.js";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
//import Something from "./something.js";

function App() {
  const users = [
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
      imgUrl: "https://pbs.twimg.com/media/EYso5MTX0AErnyv.jpg",
    },
  ];

  const AuthorParsePage = () => {
    return (
      <>
        {users.map((author, index) => (
          <Link key={index} to={`/Author/${index + 1}`}>
            {author.author}
          </Link>
        ))}
      </>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TableInfo} />
          <Route
            path="/author/0"
            component={() => <AuthorPage id="0" />}
          />
          <Route
            path="/author/1"
            component={() => <AuthorPage id="1" />}
          />
          <Route
            path="/author/2"
            component={() => <AuthorPage id="2" />}
          />
          <Route
            path="/author/:authorId"
            exact
            component={AuthorParsePage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
//<Route path="/something" exact component={Something} />
//<Route path = "/shirts/:id" render = {(routerProps) => this.renderShirts(routerProps)} />
