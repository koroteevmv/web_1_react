import React from 'react';
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style ={LinkStyle} to='/'>Главная</Link>
            <Link style ={LinkStyle} to='/about'> О приложении</Link>
            <Link style={LinkStyle} to='/creater'>О разработчике</Link>
        </header>
    )
}
const LinkStyle = {
    textDecoration:'none',
    color: 'white',
    marginRight:'30px'
};
const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
};

export default Header;