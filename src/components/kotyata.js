import React, {Component} from 'react';
import {render} from 'react-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import Img from 'react-image';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgImage: ""
        }
      }
      boxClick = (e) => {
        this.setState({
          bgImage: "url(" + "https://avatars.mds.yandex.net/get-pdb/1613577/e8feaa02-c6d3-4bfe-a3de-88ab0bdc2371/s1200?webp=false" + ")",
          height: 700,
          width: 900,
          
        })
      }

  

    render() {
        return (
            <div className="container">
                <h1 className="form__label">Посмотреть котят</h1>
                <div className="calculator__wrapper">
                    <button className="calculator__button" style={{backgroundImage: this.state.bgImage, height:this.state.height, width:this.state.width  }} onClick={this.boxClick}>Туть</button>
                    <button className="calculator__button calculator__button--round" onClick={this.onButtonClick2}>А ТЕПЕРЬ ПОГЛАДИТЬ</button>
              
                    <h1 className="calculator__result calculator__result--text">БЫСТРО</h1>
                    
                </div>
            </div>
        );
    }
}

export default Calculator;
