import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>TODOS</Link></li>
                    <li><Link to='/calculator'>КАЛЬКУЛЯТОР БАЛЛОВ</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
