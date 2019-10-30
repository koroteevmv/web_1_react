import React, {Component} from 'react';

class AddTodo extends Component {
    state ={
        title: '',

    };
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
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
                       style={{flex: '14'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <input type='submit'
                       value='Сохранить'
                       className="btn btn-success"
                       style={{flex: '1'}}
                />
            </form>
        );
    }
}
export default AddTodo;