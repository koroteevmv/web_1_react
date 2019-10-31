import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1 class="card-header" style={{ background: "black" }}>
          Список дел
        </h1>
      </header>

      <header style={{ background: "black" }}>
        <Link style={LinkStyle} to="/">
          Главная
        </Link>
        <Link style={LinkStyle} to="/About">
          {" "}
          О приложении
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
  background: "black",
  color: "white",
  textAlign: "center",
  padding: "10px"
};
const headerStyle1 = {
  background: "midnightblue",
  color: "white",
  textAlign: "center",
  padding: "10px"
};

export default Header;
