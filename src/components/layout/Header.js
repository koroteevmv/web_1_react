import React from 'react';
import {Link} from "react-router-dom";
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={LinkStyle} to="/">На главную♥  </Link>
            <Link style={LinkStyle} to="/about">Информация♥</Link>

        </header>
    )
}
const LinkStyle = {
    textDecoration:'none',
};
const headerStyle = {
    textAlign: 'center',
    padding: '10px',
}

export default Header;