import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h3>I'm beginning</h3>
            <h3>to feel like a</h3>
            <h1>React God</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginBottom: '30px',
}

export default Header;
