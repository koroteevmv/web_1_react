import React from 'react';
import PropTypes from 'prop-types'
class TodoItem extends React.Component{
    getStyle = () => {
        return{
            background: '#eed3ff',
            padding: '15px',
            borderBottom: '4px #ccc dotted',
            borderBottomColor: 'rgba(0,40,255,0.16)',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };
    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const {id, title} = this.props.todo;
        const {kdney} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p align='left'>
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    {' '}
                    { kdney }
                    <button onClick={this.props.delTodo.bind(this, id)}
                            style={btnStyle}>X</button>
                </p>
            </div>
        );
    }
}
const btnStyle = {
    background: '#0b0966',
    color: '#fc4cff',
    border: 'dotted',
    borderColor: '#a1a5ff',
    padding: '2px 15px',
    borderRadius:'3%',
    cursor: 'pointer',
    float:'right'
};
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};
export default TodoItem;