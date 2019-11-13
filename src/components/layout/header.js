import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <div className="d-flex justify-content-center">
            <Link className="m-3" to='/'>Главная</Link>
            <Link className="m-3" to='/about'> О нас</Link>
            <Link className="m-3" to='/author'>Разработчик</Link>
            </div>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

export default Header;