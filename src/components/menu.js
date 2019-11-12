import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component{

    render() {
        return (
            <div className='menu'>
                <Link to='/'>Список дел</Link>
                <Link to='/two'>React</Link>
                <Link to='/three'>Мем</Link>
            </div>
        );
    }
}

export default Menu;
