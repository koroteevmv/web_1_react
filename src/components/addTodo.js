import React, {Component} from 'react';

class AddTodo extends Component {
    state ={
        title: '',
        duration: ''
    };
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.duration);
        this.setState({title:'', duration:''})
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
                <input type='number'
                       name="duration"
                       placeholder='Срок'
                       style={{flex: '8'}}
                       value={this.state.duration}
                       onChange={this.onChange}
                       className="btn btn-primary btn-sm"
                />
                <input type='submit'
                       value='Добавить'
                       className='btm'
                       class="btn btn-primary btn-sm"
                       style={{flex: '2'}}
                />


            </form>
        );
    }
}
export default AddTodo;