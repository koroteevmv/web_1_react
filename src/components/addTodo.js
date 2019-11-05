import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: '',
        duration: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.duration)
        // clear the input
        this.setState({title: ''})
    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type='text'
                       name='title'
                       placeholder='Add todo'
                       style={{flex: '10'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <input type='number'
                       name="duration"
                       min={1}
                       style={{flex: '8'}}
                       value={this.state.duration}
                       onChange={this.onChange}
                       className="btn btn-secondary"
                />
                <input type='submit'
                       value='Добавить'
                       className="btn btn-secondary"
                       style={{flex: '1'}}
                />
            </form>
        );
    }
}

export default AddTodo;