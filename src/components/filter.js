import React, {Component} from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    onSubmitForm = (evt) => {
        evt.preventDefault();
        this.props.filter(this.state.value.toLowerCase());
    }

    onInputChange = (evt) => {
        this.setState({value: evt.target.value.toLowerCase()});
        console.log("Текущее значение контрольруемого инпута:", evt.target.value);
    }

    render() {
        return (
            <form
                style={{display: 'flex', marginTop: '30px', marginBottom: '30px'}}
                onSubmit={this.onSubmitForm}
            >
                <input type='text'
                       name='title'
                       placeholder='Отфильтровать ToDos'
                       style={{flex: '10', height: '50px', background: '#0e803d', fontSize: '30px', color: 'black'}}
                       onChange={this.onInputChange}
                />
                <input type='submit'
                       value='Фильтр'
                       className='btm'
                       style={{flex: '2', background: '#0e803d', cursor: 'pointer', fontSize: '30px'}}
                />
            </form>
        );
    }
}

export default Filter;
