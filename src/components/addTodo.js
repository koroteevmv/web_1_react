import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        title : '',
        filter : false
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.filter)
        {
            this.props.filterTodos(this.state.title);
        }
        else {
            this.props.addTodo(this.state.title);
            this.setState({title: ''});
        }
    };

    onChange = (e) => this.setState({ title: e.target.value });

    onFilter = (e) => this.setState({filter : e.target.checked});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type='text'
                       name='title'
                       placeholder='Add todo'
                       style={{flex: '10'}}
                       value={this.state.title}
                       onChange={this.onChange}
                />
                Фильтр (если да, то отфильтруется)
                <input type='checkbox'
                       name='doFilter'
                       onClick={this.onFilter}
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