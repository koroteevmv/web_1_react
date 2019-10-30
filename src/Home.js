import React from "react";

export default class Home extends React.Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      marginLeft: "5%",
      marginRight: "5%",
      borderBottom: "1px #ccc dotted"
    };
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <h1>Добро пожаловать!</h1>
      </div>
    );
  }
}
