import React, { Component } from "react";

export default class PushAround extends Component {
  constructor() {
    super();
    this.state = {
      pushme: "Push Me Around"
    };
  }
  render() {
    return (
      <div className="App">
        <h2> Move Me </h2>
        {this.state.pushme}
        <br />
        <button>Left</button>
        <button>Center</button>
        <button>Right</button>
      </div>
    );
  }
}
