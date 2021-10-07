
import React, {Component} from 'react';
class About extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>About this app</h1>
                <p>This application is intended for the introduction of cases. Developer Romashka corp.

                </p>
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div></React.Fragment>
        );
    }
}
export default About;