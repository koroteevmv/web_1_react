import React, {Component} from 'react';

class AddTodo extends Component {
    state ={
        title: '',
        kdney: ''
    };
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.kdney);
        this.setState({title:'', kdney:''})
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
                       placeholder='Добавьте дело'
                       style={{flex: '10'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <input type='text'
                       name="kdney"
                       placeholder='Количество дней на выполнение'
                       style={{flex: '6'}}
                       value={this.state.kdney}
                       onChange={this.onChange}
                       className="form-control form-control-lg"
                />
                <input type='submit'
                       value='Сохранить'
                       className="btn btn-primary btn-sm"
                       style={{flex: '1.5', background: '#433791', borderColor:'#433791'}}
                />
            </form>
        );
    }
}
export default AddTodo;