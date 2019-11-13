import React, { Component } from 'react';

class AddTodo extends Component {

    state = { title: '', date: '' };
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.date);
        this.setState({ title: '', date: '' });
    };

    render() {
        return (
            <form className="d-flex flex-column" onSubmit={this.onSubmit}>
                <input type='text'
                    name='title'
                    className='m-2'
                    placeholder='Add Todo'
                    style={{ flex: '10' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <div className="d-flex">
                    <input type="date"
                        name="date"
                        className="m-2"
                        value={this.state.date}
                        onChange={this.onChange}
                    />
                    <input type='submit'
                        value='Add'
                        className='btm m-2'
                        style={{ flex: '1' }}
                    />
                </div>
            </form>
        );
    }
}
export default AddTodo;