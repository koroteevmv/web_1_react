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
                <input className="form-control form-control-lg"
                       type='text'
                       name='title'
                       style={{flex: '60'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <input type='number'
                       name="duration"
                       min="1" max="100"
                       style={{flex: '1'}}
                       value={this.state.duration}
                       onChange={this.onChange}

                />
                <input type='submit'
                       value='Добавить'
                       className="btn btn-primary btn-sm"
                       style={{flex: '9'}}
                />


            </form>
        );
    }
}
export default AddTodo;