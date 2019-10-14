import React, {Component} from 'react';

class HolyBootstrap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2" style={{backgroundColor: "red", height: "100px", textAlign: "center", fontSize: "36px"}}>Я</div>
                    <div className="col-md-2" style={{backgroundColor: "orange", height: "100px", textAlign: "center", fontSize: "36px"}}>не</div>
                    <div className="col-md-2" style={{backgroundColor: "yellow", height: "100px", textAlign: "center", fontSize: "36px"}}>очень</div>
                    <div className="col-md-2" style={{backgroundColor: "green", height: "100px", textAlign: "center", fontSize: "36px"}}>сильно</div>
                    <div className="col-md-2" style={{backgroundColor: "#3748b8", height: "100px", textAlign: "center", fontSize: "36px"}}>люблю</div>
                    <div className="col-md-2" style={{backgroundColor: "purple", height: "100px", textAlign: "center", fontSize: "36px"}}>Bootstrap :(</div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-2" style={{backgroundColor: "red", height: "100px", textAlign: "center", fontSize: "36px"}}>но</div>
                    <div className="col-md-2" style={{backgroundColor: "orange", height: "100px", textAlign: "center", fontSize: "36px"}}>весь</div>
                    <div className="col-md-2" style={{backgroundColor: "yellow", height: "100px", textAlign: "center", fontSize: "36px"}}>этот</div>
                    <div className="col-md-2" style={{backgroundColor: "green", height: "100px", textAlign: "center", fontSize: "36px"}}>блок</div>
                    <div className="col-md-2" style={{backgroundColor: "#3748b8", height: "100px", textAlign: "center", fontSize: "36px"}}>написан</div>
                    <div className="col-md-2" style={{backgroundColor: "purple", height: "100px", textAlign: "center", fontSize: "36px"}}>на нем</div>
                </div>
            </div>
        );
    }
}

export default HolyBootstrap;
