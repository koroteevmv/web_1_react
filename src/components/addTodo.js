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
            <form onSubmit={this.onSubmit} style={{display: 'flex'}} class="d-flex flex-wrap">
                <input className="form-control m-1"
                       type='text'
                       name='title'
                       placeholder='ADD TODO...'
                       style={{flex: '10'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <input type='text'
                       name="duration"
                       placeholder='DURATION (IN DAYS)'
                       style={{flex: '6'}}
                       value={this.state.duration}
                       onChange={this.onChange}
                       className="form-control m-1"
                />
                <input type='submit'
                       value='SAVE'
                       className="btn btn-sm m-1"
                       style={{flex: '1.5', background: '#ec407a', color: '#fff'}}
                />
            </form>
        );
    }
}
export default AddTodo;