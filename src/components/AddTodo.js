import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            date: "",
        }

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event) {
        event.preventDefault();
        if (this.state.value.trim()) {
            this.props.onCreate(this.state.value, this.state.date);
            this.setState({value: ""});
        }
    }

    render() {
        return (
            <form className="form"
                  onSubmit={this.submitHandler}>
                <input type='text'
                       name='title'
                       placeholder='Название дела'
                       className="form__title"
                       value={this.state.value}
                       onChange={event => this.setState({value: event.target.value})}
                       required={"required"}
                />
                <label className="form__label"> Дедлайн:
                    <input type='date'
                           name='date'
                           placeholder='Дату сюда'  
                           className="form__date"
                           onChange={event => this.setState({date: new Date(event.target.value)})}
                           required={"required"}
                    />
                </label>
                <input type='submit'
                       value='Добавить'
                       className='btm'
                       className="form__button"
                />
            </form>
        );
    }
}

export default AddTodo;
