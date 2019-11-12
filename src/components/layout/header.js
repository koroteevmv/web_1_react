import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 className='h1'>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: 'linear-gradient(45deg, deeppink, dodgerblue 50%)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontSize: '80px',
}

export default Header;
