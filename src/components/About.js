import React from 'react';
class About extends React.Component{
    render() {
        return(
            <div style={divStyle}>
                <p>
                    Данное прилоджение позволяют вести список дел, которые необходимо сделать.
                </p>
            </div>

        )
    }

}
const divStyle = {
    marginTop:'20px'
};

export default About;