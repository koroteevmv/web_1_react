import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/#" className="nav-link" id="main">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts" className="nav-link" id="contacts">Контакты</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" id="about">О нас</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    }
// const LinkStyle = {
//     color: #fff,
//     text-decoration: none,
// }


export default Navbar;
