import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex', width: '700px', margin: '0 auto', justifyContent: 'space-around', marginTop: '20px'}}>
                <Link style={{marginLeft: '10px', padding: '20px', fontSize: '30px', display: 'block', textAlign: 'center', background: 'rgb(166, 212, 247)', textDecoration: 'none', color: 'black', borderRadius: '50%', border: '2px solid blue'}} to='/'>Список дел</Link>
                <Link style={{marginLeft: '10px', padding: '20px', fontSize: '30px', display: 'block', textAlign: 'center', background: 'rgb(166, 212, 247)', textDecoration: 'none', color: 'black', borderRadius: '50%', border: '2px solid blue'}}to='/aboutme'>Обо мне</Link>
                <Link style={{marginLeft: '10px', padding: '20px', fontSize: '30px', display: 'block', textAlign: 'center', background: 'rgb(166, 212, 247)', textDecoration: 'none', color: 'black', borderRadius: '50%', border: '2px solid blue'}}to='/contacts'>Мои контакты</Link>
            </div>
        );
    }
}

export default Menu;
