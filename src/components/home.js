import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to Ryan's Torture Exercise! Pick a link!"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
    </div>
    );
  }
}
