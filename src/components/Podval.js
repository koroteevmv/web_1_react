import React from 'react';

class Podval extends React.Component{
    render() {
        return (
            <div style={podvalStyle}>
                <h1>Ксения Нестерова (ПИ4-1) <br/> 2019</h1>
            </div>
        )
    }
}

const podvalStyle = {
    background: '#1E90FF',
    color: '#000',
    textAlign: 'center',
    padding: '10px',
}

export default Podval;
