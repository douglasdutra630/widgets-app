import React, { Component } from "react";

export default class HideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    });
  }

  render() {
    if (this.state.visibility) {
      return (
        <div className="App">
          <h2> Hide/Show </h2>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h2> Hide/Show </h2>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
