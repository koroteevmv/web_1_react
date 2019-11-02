import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title: ""
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    };
    onChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        });


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                <input type='text'
                       name='title'
                       placeholder='Add todo'
                       value={this.state.title}
                       onChange={this.onChange}
                       style={{flex: '10'}}
                />
                <input type='submit'
                       value='Submit'
                       className="btn btn-secondary"

                       style={{flex: '1'}}
                />
            </form>
        );
    }
}

export default AddTodo;