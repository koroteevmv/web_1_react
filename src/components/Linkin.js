import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
function Linkin() {
  return (
    <header style={headerStyle}>
      <h1>Список дел</h1>
      <Link style={LinkStyle} to="/">
        [Главная]
      </Link>
      <Link style={LinkStyle} to="/About">
        {" "}
        [О приложении]
      </Link>
      <Link style={LinkStyle} to="/contacts">
        {" "}
        [Контакты]
      </Link>
    </header>
  );
}
const LinkStyle = {
  color: "white"
};
const headerStyle = {
  background: "black",
  color: "white",
  textAlign: "center",
  padding: "10px"
};

export default Linkin;
