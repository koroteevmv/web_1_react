import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TODOS</h1>
            <Link style={LinkStyle} to="/">HOME</Link>
            <span> | </span>
            <Link style={LinkStyle} to="/Contacts">CONTACTS</Link>

        </header>
    )
}
const LinkStyle = {
    color: '#fff',
    textDecoration:'underlined',
};
const headerStyle = {
    background: '#7b1fa2',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
}

export default Header;