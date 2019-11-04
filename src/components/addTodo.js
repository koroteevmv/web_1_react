import React, {Component} from 'react';

class AddTodo extends Component {

    state = {
        title: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        // clear the input
        this.setState({title: ''})
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type='text'
                       name='title'
                       placeholder='Add todo'
                       value={this.state.title}
                       style={{flex: '10'}}
                       onChange={this.onChange}
                />
                <input type='submit'
                       value='Submit'
                       className='btm'
                       style={{flex: '1'}}
                />
            </form>
        );
    }
}

export default AddTodo;