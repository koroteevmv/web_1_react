import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>

        <header style={headerStyle1}>
        <Link style={LinkStyle} to="/">
          [Главная]
        </Link>
        <Link style={LinkStyle} to="/About">
          {" "}
          [О приложении]
        </Link>
      </header>
      <br />
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

export default Header;