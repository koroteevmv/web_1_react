import React from 'react';
import PropTypes from 'prop-types'
class TodoItem extends React.Component{
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '5px',
            border: '2px solid #B0B0B0',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };
    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const {id, title} = this.props.todo;
        const {duration} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p align='left'>
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    {' '}
                    { duration }
                    <button onClick={this.props.delTodo.bind(this, id) }
                            style={btnStyle}>X</button>
                </p>
            </div>
        );
    }
}
const btnStyle = {
    background: '#94ab90',
    color: '#e6fdff',
    border: 'line',

    padding: '7px 16px',
    borderRadius:'70%',
    cursor: 'pointer',
    float:'right'
};

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};


export default TodoItem;
