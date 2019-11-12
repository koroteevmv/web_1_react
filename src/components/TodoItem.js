import React from 'react';
import PropTypes from 'prop-types'

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
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p align='left' className="d-flex justify-content-between">
                    <div>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}{title}
                    </div>
                    <button onClick={this.props.delTodo.bind(this, id)}>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
