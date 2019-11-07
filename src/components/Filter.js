import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.onFilter(this.state.value.toLowerCase());
        this.setState({value: ""});
    }

    render() {
        return (
            <form className="form form__filter"
                  onSubmit={this.submitHandler}>
                <input type='text'
                       name='title'
                       placeholder='Название дела'
                       className="form__title form__title--filter"
                       value={this.state.value}
                       onChange={event => this.setState({value: event.target.value})}

                />
                <input type='submit'
                       value='Отфильтровать'
                       className='btm'
                       className="form__button form__button--filter"
                />
            </form>
        );
    }
}

export default AddTodo;
