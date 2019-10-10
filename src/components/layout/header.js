import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>THE GOD OF REACT</h1>
            <h2>DIMANICH</h2>
            <h3>VLADIMIROVICH</h3>
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
