import React from 'react';
import {Link} from "react-router-dom";
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <div style={St1}>

            <Link to="/">Home </Link>
            <Link to="/About"> About </Link>
            </div>
        </header>
    )
}

const headerStyle = {
    background: 'rgba(21,71,14,0.46)',
    color: '#bbdea4',
    textAlign: 'center',
    padding: '10px',

}
const St1 = {
    textAlign: 'right',
    padding: '10px',
    background: '#fff',


}
export default Header;