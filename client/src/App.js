import React from "react";

import "./App.css";
import "antd/dist/antd.css";

import TableInfo from "./tableInfo.js";
import AuthorPage from "./authorPage.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";

//var Router = require("react-router").Router;
//var Route = require("react-router").Route;
//var Switch = require("react-router").Switch;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TableInfo} />
          <Route path="/author/0" component={AuthorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
