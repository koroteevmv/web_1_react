import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Список задач</h1>
            <Link style={LinkStyle} to="/">На главную</Link> |
            <Link style={LinkStyle} to="/Contacts"> Наши контакты
            </Link>

        </header>
    )
}
const LinkStyle = {
    color: '#f684ff',
    textDecoration:'none',
};
const headerStyle = {
    background: '#0b0966',
    color: '#f684ff',
    textAlign: 'center',
    padding: '20px',
}

export default Header;