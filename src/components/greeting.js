import React, { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: true
    };
  }
  render() {
    return (
      <div className="App">
        <h2> Greeting </h2>
        <h2> {this.state.shown ? "hello" : "goodbye"}</h2>
        <button onClick={() => this.setState({ shown: !this.state.shown })}>
          Toggle
        </button>
      </div>
    );
  }
}
