import React, { Component } from "react";
import { Table } from "antd";
import Privet from "./privet.js";
//import { Link } from "react-router-dom";
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
                console.log("sdfsd");
                window.location =
                  "http://localhost:3000/author/" + rowIndex;
              }, // click row
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
*/
