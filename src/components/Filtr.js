import React from "react";
class Filtr extends React.Component {
  state = {
    title: ""
  };
  onClick = e => {
    e.preventDefault();
    this.props.FiltrTodo(this.state.title);
  };
  onClick2 = e => {
    e.preventDefault();
    this.props.delFiltr();
    this.setState({ title: "" });
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  render() {
    return (
      <div>
        <form className="formStyle" style={{ display: "flex" }}>
          <input
            type="text"
            style={{ flex: "1" }}
            placeholder="Поиск"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </form>
        <form className="formStyle" style={{ display: "flex" }}>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ flex: "1" }}
            onClick={this.onClick}
          >
            Найти
          </button>
          <div>&nbsp;</div>
          <button
            type="submit"
            class="btn btn-primary"
            style={{ flex: "1" }}
            onClick={this.onClick2}
          >
            К списку
          </button>
        </form>
      </div>
    );
  }
}
export default Filtr;
