import React from 'react';
class Filtr extends React.Component{
    state = {
        title:''
    }
    onClick = (e) => {
        e.preventDefault();
        this.props.FiltrTodo(this.state.title);
    };
    onClick2 = (e) => {
        e.preventDefault();
        this.props.del();
        this.setState({title:''})
    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        return (
            <form className='formStyle' style={{ flexDirection: 'column'}} >
                        <input type='text'
                               style={{flex: '10'}}
                               name = 'title'
                               value= {this.state.title}
                               onChange={this.onChange}
                        />
                        <input
                            type="submit"
                            value="Найти"
                            className="btn btn-secondary"
                            onClick={this.onClick}
                        />
                        <input
                            type="submit"
                            value="Очистить"
                            className="btn btn-secondary"
                            onClick={this.onClick2}
                        />
                    </form>
        );
    }
}
export default Filtr;