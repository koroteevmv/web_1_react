import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            placeholder="Add affair"
            style={{ flex: "1" }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="number"
            name="duration"
            placeholder="Due date"
            style={{ flex: "1" }}
            value={this.state.duration}
            onChange={this.onChange}
          />
        </form>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="submit"
            value="Add"
            class="btn btn-primary"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
