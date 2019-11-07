import React from 'react';
class Filtration extends React.Component{
    state = {
        title:''
    }
    onClick = (e) => {
        e.preventDefault();
        this.props.FiltrationTodo(this.state.title);
    };
    onClick2 = (e) => {
        e.preventDefault();
        this.props.delFiltration();
        this.setState({title:''})
    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        return(
            <form className='formStyle' style={{display: 'flex'}}>
                <input type='text'
                       style={{flex: '10'}}
                       name='title'
                       value={this.state.title}
                       onChange={this.onChange}
                       className="form-control m-1"
                       placeholder='SEARCH...'
                />
                <button type="submit"
                        className="btn btn-primary btn-sm m-1"
                        style={{flex: '1', background: '#ec407a', color: "#fff"}}
                        onClick={this.onClick}>SEARCH
                </button>
                <button type="submit"
                        className="btn btn-sm m-1"
                        style={{flex: '1', background: '#ec407a', color: "#fff"}}
                        onClick={this.onClick2}>CLEAR
                </button>
            </form>
        )
    }
}
export default Filtration;