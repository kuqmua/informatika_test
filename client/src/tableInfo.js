import React, { Component } from "react";
import { Table } from "antd";
import Privet from "./privet.js";
//import AuthorPage from "./authorPage.js";
import { Link } from "react-router-dom";
//import { browserHistory } from "react-router";
//import AuthorPage from "./authorPage.js";

class TableInfo extends Component {
  constructor() {
    super();

    this.state = {
      tableData: [],

      columns: [
        {
          title: "Id",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Автор",
          dataIndex: "author",
          key: "author",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "Наименование книги",
          dataIndex: "title",
          key: "title",
        },
        {
          title: "Дата",
          dataIndex: "date",
          key: "date",
        },
      ],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8888/table")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ tableData: json }, () =>
          console.log("privet fetched...", json)
        );
      });
  }

  render() {
    return (
      <div>
        <Privet />
        <Table
          columns={this.state.columns}
          dataSource={this.state.tableData}
          rowKey={this.state.tableData.id}
          pagination={{
            position: ["bottomCenter"],
          }}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                /*
                this.context.router.transitionTo(
                  "http://localhost:3000/author/" + rowIndex
                );
                */
                /*
                browserHistory.push(
                  "http://localhost:3000/author/" + rowIndex
                );
                */
                window.location =
                  "http://localhost:3000/author/" + rowIndex;
              },

              // click row
              onDoubleClick: (event) => {}, // double click row
              onContextMenu: (event) => {}, // right button click row
              onMouseEnter: (event) => {}, // mouse enter row
              onMouseLeave: (event) => {}, // mouse leave row
            };
          }}
          onHeaderRow={(column) => {
            return {
              onClick: () => {}, // click header row
            };
          }}
        />
        <Link to="/author/0">0 author</Link>
        <Link to="/author/1">1 author</Link>
        <Link to="/author/2">2 author</Link>
      </div>
    );
  }
}
export default TableInfo;
/*
return (
                <div>
                  <Link to="/author/1" className="btn btn-primary" />
                </div>
              );


// userId will be Array index + 1
const UsersPage = () => {
  return (
    <React.Fragment>
      <h3>Users Page</h3>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </React.Fragment>
  );
};

////

/*
import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];

const IndexPage = () => {
  return <h3>Home Page</h3>;
};

const UsersPage = () => {
  return (
    <>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </>
  );
};

const UserPage = ({ match, location }) => {
  const {
    params: { userId },
  } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {userId}
      </p>
      <p>
        <strong>User Name: </strong>
        {users[userId - 1].name}
      </p>
    </>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
          <Link to="/users">Users</Link>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/user/:userId" component={UserPage} />
        </Switch>
      </Router>
    </section>
  );
};

export default App;


(
                <Link to="/author/0">
                  <AuthorPage />
                </Link>
              ),
*/
