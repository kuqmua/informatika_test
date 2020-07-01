import React, { Component } from "react";
import { Button, Descriptions } from "antd";
import "./authorPage.css";
import { Link } from "react-router-dom";
//import Bulgakov from "../../content/bulgakov.webp";

class AuthorPage extends Component {
  constructor() {
    super();
    this.state = {
      AuthorInfo: [],
      Author: "Пока не известно",
      DateOfBirth: "Пока не известно",
      DateOfDeath: "Пока не известно",
      ImgUrl: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8888/author/" + this.props.id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState(
          {
            Author: json.author,
            AuthorInfo: json,
            DateOfBirth: json.dateOfBirth,
            DateOfDeath: json.dateOfDeath,
            ImgUrl: json.imgUrl,
          },
          () => console.log("privet fetched...", json, this.props.id)
        );
      });
  }

  render() {
    console.log(this.props.id);
    return (
      <div>
        <div>
          {
            <img
              src={this.state.ImgUrl}
              //"http://localhost:8888/gogol.jpg"
              alt="фото писателя"
              width="220"
              height="300"
            />
          }

          <div>
            <Descriptions title="Информация об авторе" column="3">
              <Descriptions.Item label="Имя">
                {this.state.Author}
              </Descriptions.Item>

              <Descriptions.Item label="Дата рождения">
                {this.state.DateOfBirth}
              </Descriptions.Item>
              <Descriptions.Item label="Дата смерти">
                {this.state.DateOfDeath}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>

        <Button type="primary">
          <Link to="/">Назад</Link>
        </Button>
      </div>
    );
  }
}
export default AuthorPage;

//<text>{this.state.AuthorInfo}</text>
//<Redirect to={{ pathname: "/" }}></Redirect>
/*
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
*/
