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
          'Дела'
        </Link>

        <Link style={LinkStyle} to="/About">
          {" "}
          'Справка'
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
