import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Ryan's Torture Exercise! Pick a link!"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.pushme}</h1>
    </div>
    );
  }
}
