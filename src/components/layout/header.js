import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/list.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <img className="logo" src={Logo} alt="Логотип" />
        <nav className="nav right">
          <ul>
            <li className="current">
              <Link to="/">ГЛАВНАЯ</Link>
            </li>
            <li>
              <Link to="/List">СПИСОК ДЕЛ</Link>
            </li>
            <li>
              <Link to="/About">О ПРИЛОЖЕНИИ</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
