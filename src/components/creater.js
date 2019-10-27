import React from 'react';
class Creater extends React.Component{
    render() {
        return(
            <div style={divStyle}>
                <p> Приложение разработал студент группы ПИ4-1 Лындин К.А.</p>
            </div>
        )
    }
}
const divStyle = {
    marginTop:'20px'
};
export default Creater;