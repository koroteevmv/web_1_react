import React from 'react';
import PropTypes from 'prop-types';
import App from '../App';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const { id, title, date } = this.props.todo;
        this.date = new Date(date);
        return (
            <div style={this.getStyle()}>
                <div align='left' className="d-flex justify-content-between">
                    <span className="d-flex jusify-content-between">
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}{title}
                    </span>
                    <div>
                    {'Выполнить к '}{date}{' '}
                    <button onClick={this.props.delTodo.bind(this, id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
