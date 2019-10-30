import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  getStyle = () => {
    return {
      padding: "5px",
      marginLeft: "5%",
      marginRight: "5%"
    };
  };
  render() {
    return (
      <div style={this.getStyle()}>
        {" "}
        <div>
          {" "}
          <form className="formStyle" style={{ display: "flex" }}>
            Добавить делишки:
          </form>{" "}
        </div>
        <div>
          <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
            <input
              type="text"
              name="title"
              placeholder="Введите дело"
              style={{ flex: "10" }}
              value={this.state.title}
              onChange={this.onChange}
            />
            <input
              type="submit"
              value="Добавить"
              className="btm"
              style={{
                flex: "1",
                background: "#66cdaa",
                color: "white",
                fontSize: "100%"
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddTodo;
