import React from 'react';
class Filtr extends React.Component{
    state = {
        title:''
    }
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '5px',
            border: '2px solid #B0B0B0',
            textDecoration: 'line-through',
            style: 'flex',

        }
    };
    onClick = (e) => {
        e.preventDefault();
        this.props.FiltrTodo(this.state.title);
    };
    onClick2 = (e) => {e.preventDefault();
        this.props.delFiltr();
        this.setState({title:''})}
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        return(
            <form className='formStyle' style={{display: 'flex'}}>
                <div style={this.getStyle()}>

                <input type='text'
                       style={{flex: '10'}}
                       name = 'title'
                       value= {this.state.title}
                       onChange={this.onChange}
                />
                <button type="submit"
                        className="btn btn-secondary"
                        style={{flex: '2'}}

                        onClick={this.onClick}>Фильтр</button>
                <button type="submit"
                        className="btn btn-secondary"
                        style={{flex: '2'}}
                        onClick={this.onClick2}>Очистить</button></div>
            </form>
        )
    }
}
export default Filtr;