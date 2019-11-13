import React from 'react';
class Filtr extends React.Component{
    state = {title:''}
    onClick = (e) => {
        e.preventDefault();
        this.props.FiltrTodo(this.state.title);
    };
    onClick2 = (e) => {
        e.preventDefault();
        this.props.cancelF();
        this.setState({title:''})
    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        return(
            <form className='formStyle' style={{display: 'flex', flexDirection: 'column'}} >
                <input type='text'
                       style={{flex: '10'}}
                       name = 'title'
                       value= {this.state.title}
                       onChange={this.onChange}
                />
                <button type="submit"
                        className="btn btn-secondary"
                        onClick={this.onClick}>Find</button>
                <button type="submit"
                        className="btn btn-secondary"
                        onClick={this.onClick2}>Clear</button>
            </form>
        )
    }
}
export default Filtr;