import React from 'react';

class TodoItem extends React.Component{
    render() {
        return (
            <div>
                <p> {
                    this.props.todo.title
                } </p>
            </div>
        );
    }
}

export default TodoItem;
