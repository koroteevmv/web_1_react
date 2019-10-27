import React from 'react';
class AddTodo extends React.Component{
    state = {
        title: '',
        date: ""
    };
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.date);
        this.setState({title: '', date:''})
    };
    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                <input type='text'
                       name='title'
                       placeholder='Добавьте дело'
                       value={this.state.title}
                       onChange={this.onChange}
                       className='form-input'
                />
                <label className='form-label'> Укажите дату выполнения </label>
                <input type='date'
                       name='date'
                       className='form-date'
                       value={this.state.date}
                       onChange={this.onChange}
                />
                <input type='submit'
                       value='Ввести'
                       className='btn'
                />
            </form>
        );
    }
}

export default AddTodo;