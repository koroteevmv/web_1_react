import React from 'react';
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={LinkStyle} to="/">На главную </Link> |
            <Link style={LinkStyle} to="/about"> О приложении
            </Link>

        </header>
    )
}
const LinkStyle = {
    color: '#fff',
    textDecoration:'none',
};
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

export default Header;