import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleIncrementor = increment => {
    this.setState({
      count: this.state.count + increment
    });
  };
  render() {
    return (
      <div className="App">
        <h2> Counter </h2>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.handleIncrementor(1)}>Add</button>
        <button onClick={() => this.handleIncrementor(-1)}>Subtract</button>
      </div>
    );
  }
}
