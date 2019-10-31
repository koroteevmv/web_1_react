import React from "react";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      marginLeft: "5%",
      marginRight: "5%",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = e => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <div>
          <p align="left">
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
            />{" "}
            {title}
            <button
              onClick={this.props.delTodo.bind(this, id)}
              style={btnStyle}
            >
              X
            </button>{" "}
          </p>
        </div>
        <div>
          <label htmlFor="datum">Добавить дату </label>
          <input type="date" id="datum" className="form-control" />
        </div>
      </div>
    );
  }
}

/*
const btnStyle = {
  color: "red",
  border: "none",
  cursor: "pointer",
  float: "right",
  display:"none"

  &: hover
  {display:"inline-block"}
};*/

const btnStyle = {
  background: "#f4f4f4",
  color: "red",
  border: "none",
  padding: "4px 5px",
  borderRadius: "30%",
  cursor: "pointer",
  float: "right"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
