import React from 'react';
import PropTypes from 'prop-types'
class TodoItem extends React.Component{
    getStyle = () => {
        return{
            padding: '15px',
            marginTop: '10px',
            marginBottom: '10px',
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
            <div style={this.getStyle()} class="card card-1 d-flex justify-content-center">
                <p align='left' class="m-0">
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    {' '}
                    { duration }
                    <button onClick={this.props.delTodo.bind(this, id)}
                            style={btnStyle} class="btn">DELETE</button>
                </p>
            </div>
        );
    }
}
const btnStyle = {
    background: '#ec407a',
    color: '#fff',
    padding: '2px 15px',
    cursor: 'pointer',
    float:'right'
};
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};
export default TodoItem;