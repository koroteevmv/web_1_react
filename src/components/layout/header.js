import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={LinkStyle} to="/">На главную </Link> |
            <Link style={LinkStyle} to="/about"> О приложении </Link> |
            <Link style={LinkStyle} to="/сontacts"> Контакты </Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const LinkStyle = {
    color: '#fff',
    textDecoration:'none',
 }; 

export default Header;