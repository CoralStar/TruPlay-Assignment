import React, { Component } from "react";

class UserInput extends Component {
  state = {
    Email: "",
    Password: ""
  };
  update = (event) => this.setState({ email: event.target.value });
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addName(this.state.email);
    this.setState({ Email: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={this.updateEmail}
        />
        <input type="submit" value="Sign In" />
      </form>
    );
  }
}

export default UserInput;
