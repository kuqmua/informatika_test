import React, { Component } from "react";

class Privet extends Component {
  constructor() {
    super();
    this.state = {
      privet: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8888/privet")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ privet: json }, () =>
          console.log("privet fetched...", json)
        );
      });
  }

  render() {
    return <div>{this.state.privet.title}</div>;
  }
}
export default Privet;
