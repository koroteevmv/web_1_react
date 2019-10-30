import React from 'react';
import PropTypes from 'prop-types'
class TodoItem extends React.Component{
    getStyle = () => {
        return{
            background: 'rgba(230,253,255,0)',
            padding: '20px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };
    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const {id, title} = this.props.todo;
        const {day} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p align='left'>
                    <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    {' '}
                    { day }
                    <button onClick={this.props.delTodo.bind(this, id)}
                            style={btnStyle}>X</button>
                </p>
            </div>
        );
    }
}
const btnStyle = {
    background: 'rgba(18,15,170,0)',
    color: '#ff0725',
    borderColor: '#000000',
    padding: '2px 15px',
    borderRadius:'30%',
    cursor: 'pointer',
    float:'right'
};
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};
export default TodoItem;