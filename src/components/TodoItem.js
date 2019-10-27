import React from 'react';
import PropTypes from 'prop-types'
import Moment from 'moment';

class TodoItem extends React.Component{
    getStyle = () => {
        return{
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
          const {id, title, date} = this.props.todo;
        return (
                <tr style={this.getStyle()}>
                    <th scope="row">
                        <input type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    </th>
                    <td> { title } </td>
                    <td> { Moment(date, 'DD-MM-YYYY').format('DD-MM-YYYY') } </td>
                    <td>
                        <button onClick={this.props.delTodo.bind(this, id)}
                            style={btnStyle}>X</button>
                    </td>
                </tr>
        );
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right'
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};


export default TodoItem;
