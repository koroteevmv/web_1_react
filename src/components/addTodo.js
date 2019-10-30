import React, {Component} from 'react';
class AddTodo extends Component {
    state ={
        title: '',
        day: ''
    };
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.day);
        this.setState({title:'', day:''})
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
                       placeholder='Запишите задачу и количество дней'
                       style={{flex: '10'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <select type='number'
                       name="day"
                       style={{flex: '2'}}
                       value={this.state.day}
                       onChange={this.onChange}
                       className="form-control form-control-lg"
                >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                </select>
                <input type='submit'
                       value='Добавить'
                       className="btn btn-dark"
                       style={{flex: '4'}}
                />
            </form>
        );
    }
}
export default AddTodo;