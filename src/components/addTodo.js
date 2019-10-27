import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Добавить дело"
          style={{ flex: "10" }}
        />
        <input
          type="submit"
          value="Добавить"
          className="btm"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
