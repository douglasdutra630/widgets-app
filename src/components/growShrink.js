import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
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
        <div>
          <h2> Grow/Shrink </h2>
          <h3
            style={{
              fontSize: `${
                this.state.count === 0 ? "normal" : this.state.count
              }px`
            }}
          >
            {this.state.count}
          </h3>
          <button onClick={() => this.handleIncrementor(5)}>Grow</button>
          <button onClick={() => this.handleIncrementor(-5)}>Shrink</button>
        </div>
      </div>
    );
  }
}
