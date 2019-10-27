import React from 'react';
class Filtr extends React.Component{
    state = {
        title: ""
    };
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    onClick1 = (e) => {
        e.preventDefault();
        this.props.filtr(this.state.title, this.props.todos);
    };
    onClick2 = (e) => {
        e.preventDefault();
        this.props.cancel();
        this.setState({title:''})
    };
    render() {
        return(
            <div>
                <input type='text'
                       placeholder='Введите критерий фильтрации'
                       className='form-control'
                       name = 'title'
                       value={this.state.title}
                       onChange={this.onChange}
                />
                <button className='btn btn-outline-dark'
                        onClick={this.onClick1}>Отфильтровать</button>
                <button className='btn btn-outline-dark'
                        onClick={this.onClick2}
                >Назад к списку дел</button>
            </div>
        )
    }
}
export default Filtr;