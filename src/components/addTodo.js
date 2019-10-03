import React, {Component} from 'react';

class AddTodo extends Component {
    render() {
        return (
            <form style={{display: 'flex'}}>
                <input type='text'
                       name='title'
                       placeholder='Add todo'
                       style={{flex: '10'}}
                />
                <input type='submit'
                       value='Submit'
                       className='btm'
                       style={{flex: '1'}}
                />
            </form>
        );
    }
}

export default AddTodo;