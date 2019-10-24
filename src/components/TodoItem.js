import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '25px',
            marginTop: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const {id, title, do_until} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p align='left'>
                    <input class="col-md-1" type="checkbox"
                           onChange={this.props.markComplete.bind(this, id)}/>{' '}{title}{' '}{'(Завершить до: '}{do_until}{')'}
                    <input class="col-md-1" type='image'
                           src='https://image.flaticon.com/icons/svg/126/126468.svg'
                           value=''
                           onClick={this.props.delTodo.bind(this, id)}
                           style={{flex: '2', color: 'white', float:'right', padding: '5px', height: '35px', widht: '35px'}}
                    />
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem;
