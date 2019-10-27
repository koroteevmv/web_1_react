import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: '',
        duration: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.duration);
        this.setState({title:'', duration:''})
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
                       placeholder= 'Duration (in days)'
                       style = {{flex:'1'}}
                       value={this.state.duration}
                       onChange={this.onChange}
                />
                <button type="submit"
                        className="btn btn-primary btn-lg">Add</button>
            </form>
        );
    }
}
export default AddTodo;