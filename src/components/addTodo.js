import React, {Component} from 'react';

class AddTodo extends Component {

    state = {title: ''};
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    };

    render() {
        return (
            <form className="d-flex flex-column" onSubmit={this.onSubmit}>
                <input type='text'
                       name='title'
                       placeholder='Add Todo'
                       style={{flex: '10'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <input type="date"
                name="date"
                
                />
                <input type='submit'
                       value='Add'
                       className='btm'
                       style={{flex: '1'}}
                />
            </form>
        );
    }
}
export default AddTodo;