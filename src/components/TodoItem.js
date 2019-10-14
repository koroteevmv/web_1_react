import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '0px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const {id, title, date} = this.props.todo;
        this.date = new Date(date);
        return (
            <div className="todo-item__wrapper" style={this.getStyle()}>
                <label className="label_checkbox">
                    <div className="label_wrapper">
                        <input type="checkbox"
                               onChange={this.props.markComplete.bind(this, id)}
                               checked={this.props.todo.completed ? "checked" : ""}/> {' '}
                        { title }
                    </div>
                    <span className="todo-item__date">Нужно выполнить к: {this.date.getDate()}.{this.date.getMonth() + 1}.{this.date.getFullYear()}</span>
                    <button onClick={this.props.delTodo.bind(this, id)}
                            style={btnStyle}>X</button>
                </label>
            </div>
        );
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    width: '35px',
    height: '35px',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right'
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};


export default TodoItem;
