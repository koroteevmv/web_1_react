import React from 'react';
class FiltrName extends React.Component{
    state = {
        title:''
    }
    onClick = (e) => {
        e.preventDefault();
        this.props.filtrTodo(this.state.title);
        //this.setState({title:'', duration:''})
    };
    onClick2 = (e) => {
        e.preventDefault();
        this.props.cancelFiltr();
        this.setState({title:''})
    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        return(
            <form className='formStyle'>
                <input type='text'
                       style={{flex: '10'}}
                       name = 'title'
                       placeholder='Name ToDo'
                       value= {this.state.title}
                       onChange={this.onChange}
                />
                <button type="submit"
                        className="btn btn-primary btn-sm"
                        onClick={this.onClick}>Filtr</button>
                <button type="submit"
                        className="btn btn-secondary btn-sm"
                        onClick={this.onClick2}>Cancel</button>
            </form>
        )
    }
}
export default FiltrName;