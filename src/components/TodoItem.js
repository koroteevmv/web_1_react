import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
    getStyle = () => {
        return{
            background: '#333',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {
        const {id, title, date} = this.props.todo;
        console.log(date);
        return (
            <div style={this.getStyle()}>
                <p className='linearFon' align='left' style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
                    <input type="checkbox"
                           onChange={() => (this.props.markComplete(id))}
                                checked={this.props.todo.completed && 'checked'}
                   /> {' '}
                    <p style={{margin: 0, padding: 0, width: '500px'}}> {title} </p>
                    <p style={{margin: 0, padding: 0, width: '500px'}}>
                        {date > Date.now() ? `Дней осталось: ${Math.ceil(Math.abs(Date.now() - date.getTime()) / (1000 * 3600 * 24))}` : <span className='pozdno'>Просрочено</span>}
                    </p>
                    <button className='linearAntiFon' onClick={this.props.delTodo.bind(this, id)}
                            style={btnStyle}>X</button>
                </p>
            </div>
        );
    }
}

const btnStyle = {
    background: 'deeppink',
    color: '#fff',
    border: 'none',
    padding: '5px 23px',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right',
    fontSize: '40px',
    fontWeight: 'bold',
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};


export default TodoItem;
