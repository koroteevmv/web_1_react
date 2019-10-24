import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add todo"
          style={{ flex: "10" }}
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="Submit"
          className="btm"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
