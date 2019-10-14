import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navigation">
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><Link to='/'>TODOS</Link></li>
                        <li className="navigation__item"><Link to='/calculator'>КАЛЬКУЛЯТОР БАЛЛОВ</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation;
