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
            Отфильтровать дела по имени:
          </form>{" "}
        </div>
        <div>
          <form className="formStyle" style={{ display: "flex" }}>
            <input
              type="text"
              style={{ flex: "3" }}
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              placeholder="Применить фильтр"
            />
            <input
              type="submit"
              value="Найти"
              className="btm"
              style={{
                flex: "1",
                background: "#66cdaa",
                color: "white",
                fontSize: "100%"
              }}
              onClick={this.onClick}
            />
            <input
              type="submit"
              value="Очистить"
              className="btm"
              style={{
                flex: "1",
                background: "#66cdaa",
                color: "white",
                fontSize: "100%"
              }}
              onClick={this.onClick2}
            />
          </form>
        </div>
      </div>
    );
  }
}
export default Filtr;
