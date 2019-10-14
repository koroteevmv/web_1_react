import React, {Component} from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    onButtonClick() {
        const result = document.querySelector('.calculator__result');
        const button1 = document.querySelector('.calculator__button');
        const button2 = document.querySelector('.calculator__button--round');
        button1.style.display ="none";
        button2.style.display = "block";
        result.textContent = "21";
    }

    onButtonClick2() {
        const result = document.querySelector('.calculator__result');
        const button2 = document.querySelector('.calculator__button--round');
        const text = document.querySelector('.calculator__result--text');
        text.style.display = "block";
        button2.style.display = "none";
        result.textContent = "20";
    }

    render() {
        return (
            <div className="container">
                <h1 className="form__label">В данном разделе вы можете рассчитать количество баллов, заслуженных студентом Беляевым за эту, целиком выполненную, работу</h1>
                <div className="calculator__wrapper">
                    <button className="calculator__button" onClick={this.onButtonClick}>РАССЧИТАТЬ</button>
                    <button className="calculator__button calculator__button--round" onClick={this.onButtonClick2}>А ТЕПЕРЬ ОКРУГЛИТЬ</button>
                    <h1 className="calculator__result"></h1>
                    <h1 className="calculator__result calculator__result--text">В ПЕРВУЮ АТТЕСТАЦИЮ</h1>
                </div>
            </div>
        );
    }
}

export default Calculator;
