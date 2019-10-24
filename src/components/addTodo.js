import React, {Component} from 'react';

class AddTodo extends Component {
    state ={
        title: ''
    };
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    };
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        return (

            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input class="form-control form-control-lg"
                       type='text'
                       name='title'
                       placeholder='Add todo'
                       style={{flex: '10'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <input type='submit'
                       value='Submit'
                       className='btm'
                       class="btn btn-primary btn-sm"
                       style={{flex: '1'}}
                />
            </form>
        );
    }
}
export default AddTodo;