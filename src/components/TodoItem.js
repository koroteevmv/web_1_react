import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            height: '50px',
            fontSize: '30px',
            marginBottom: '10px',
        }
    };

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const {id, title} = this.props.todo;
        const date = new Date(this.props.todo.deadline);
        console.log(date);

        return (
            <div style={this.getStyle()} className={'parentHoverPop'}>
                <label style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', position: 'relative'}}
                       className={'hoverPop'}
                >
                    <p style={{position: 'absolute', top: '-35px', background: '#F08080', width: '101%', left: '-5px', textAlign: 'center', borderTopRightRadius:'20px', borderTopLeftRadius:'20px', color: 'red', borderTop: '3px solid black', fontWeight: '700'}}
                       className={'pop'}
                    >
                        Дедлайн: {date.getDate()}{'/'}{date.getMonth()}{'/'}{date.getFullYear()}
                    </p>
                    <p align='left'>
                        <input type="checkbox"
                               onChange={this.props.markComplete.bind(this, id)}
                               checked={this.props.todo.completed}
                               style={{transform: 'scale(2.0)', marginLeft: '10px'}}/> {' '}
                        { title }
                        <button onClick={this.props.delTodo.bind(this, id)}
                                style={btnStyle}>X</button>
                    </p>
                </label>
            </div>
        );
    }
}

const btnStyle = {
    background: '#000000',
    color: '#fff',
    border: 'none',
    padding: '15px 20px',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right'
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};


export default TodoItem;
