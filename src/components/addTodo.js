import React from 'react';

class AddTodo extends React.Component {
    state = {
        todo: {
            id: '',
            title: '',
            completed: '',
            vidno: true,
            date: ''
        }
    }

    dobavitDelo = (e) => {
        e.preventDefault();
        this.setState(prevstate => ({todo: {id: Math.random() * (100000000 - 1) + 1000000, title: prevstate.todo.title, completed: prevstate.todo.completed, vidno: prevstate.todo.vidno, date: prevstate.todo.date}}), this.props.dobavit(this.state.todo));
    }

    render() {
        console.log( this.state.todo );
        return (
            <form onSubmit={this.dobavitDelo} className='addForm' style={{display: 'flex', background: '#333', marginTop: '30px', marginBottom: '30px', height: '71px'}}>
                <input
                    type='text'
                       name='title'
                       placeholder='Введите название дела'
                       style={{flex: '10', border: '3px solid black', borderRight: '3px solid purple'}}
                       value={this.state.todo.title}
                       onChange={event => this.setState({todo: {id: '', title: event.target.value, completed: false, vidno: true, date: this.state.todo.date}})}
                />
                <input type='date'

                       onChange={event => this.setState({todo:{id: '', title: this.state.todo.title, vidno: true, completed: false, date: new Date(event.target.value)}})}
                       required="required"
                />
                <input
                    type='submit'
                       value='Добавить'
                       className='btm linearFon'
                       style={{flex: '1', border: 'none'}}
                />
            </form>
        );
    }
}

export default AddTodo;
