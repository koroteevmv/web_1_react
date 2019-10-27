import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/list.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img className="logo" src={Logo} alt="Логотип" />
        <ul className="menu-ul">
          <li>
            <Link to="/">ГЛАВНАЯ</Link>
          </li>
          <li>
            <Link to="/List">СПИСОК ДЕЛ</Link>
          </li>
          <li>
            <Link to="/About">О ПРИЛОЖЕНИИ</Link>
          </li>
        </ul>
      </div>
    );
  }
}
