import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>ToDo List</h1>
        </header>
    )
}

const headerStyle = {
    background: '#1E90FF',
    color: '#000',
    textAlign: 'center',
    padding: '10px',
    fontSize: '50px'
}

export default Header;
