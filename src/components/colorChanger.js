import React, { Component } from "react";

export default class ColorChanger extends Component {
  constructor(props) {
    super();
    this.state = {
      userInput: "",
      color: "black"
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      color: this.state.userInput,
      userInput: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h2> Type a color </h2>
        <h3 style={{ color: this.state.color }}>{this.state.color}</h3>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Color (plain text)"
            type="text"
            name="userInput"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </form>
        <button type="submit">Click Me</button>
      </div>
    );
  }
}
