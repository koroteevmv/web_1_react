import React, {Component} from 'react';
import "react-datepicker/dist/react-datepicker.css";

class FilterTodo extends Component {
    
    state = {
        title: "",
      };

    handleInputChange = (event) => {
        this.setState({
            title: event.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.filterTodo(this.state.title);
    };
    
    render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type='text'
                       name='title'
                       value={this.state.title}
                       onChange={this.handleInputChange}
                       placeholder='Название'
                       style={{flex: '8'}}
                />
                <input type='submit'
                       value='Фильтровать по названию'
                       className='btm'
                       style={{flex: '5'}}
                       class="btn btn-primary"
                />
            </form>
        );
    }
}

export default FilterTodo;