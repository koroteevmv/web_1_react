import React, {Component} from 'react';

class AboutMe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>В попытках успеть все до дедлайна...</h1>
                <img src='Котик.jpg' style={{width: '500px'}}/>
            </div>
        );
    }
}

export default AboutMe;
