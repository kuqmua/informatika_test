import React, { Component } from "react";
import { Button, Descriptions } from "antd";
import "./authorPage.css";
//import { Link } from "react-router-dom";

class AuthorPage extends Component {
  constructor() {
    super();
    this.state = {
      AuthorInfo: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8888/authors")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ AuthorInfo: json }, () =>
          console.log("privet fetched...", json)
        );
      });
  }

  render() {
    return (
      <div>
        <div className="things">
          <img
            src={this.state.AuthorInfo.imgUrl}
            alt="фото писателя"
            width="220"
            height="300"
          />
          <div className="desc">
            <Descriptions title="Информация об авторе" column="3">
              <Descriptions.Item label="Имя">
                {this.state.AuthorInfo.author ||
                  "информация еще не подгружена"}
              </Descriptions.Item>
              <Descriptions.Item label="Дата рождения">
                {this.state.AuthorInfo.dateOfBirth ||
                  "информация еще не подгружена"}
              </Descriptions.Item>
              <Descriptions.Item label="Дата смерти">
                {this.state.AuthorInfo.dateOfDeath ||
                  "информация еще не подгружена"}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>

        <Button type="primary" href="http://localhost:3000/">
          Назад
        </Button>
      </div>
    );
  }
}
export default AuthorPage;
//<text>{this.state.AuthorInfo}</text>
