import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Список дел</h1>
      </header>

      <header style={headerStyle1}>
        <Link style={LinkStyle} to="/">
          [Главная]
        </Link>
        <Link style={LinkStyle} to="/About">
          {" "}
          [О приложении]
        </Link>
      </header>
      <br />
    </div>
  );
}
const LinkStyle = {
  color: "white"
};
const headerStyle = {
  background: "darkgray",
  color: "white",
  textAlign: "center",
  padding: "1px"
};
const headerStyle1 = {
  background: "gray",
  color: "white",
  textAlign: "center",
  padding: "6px"
};

export default Header;
