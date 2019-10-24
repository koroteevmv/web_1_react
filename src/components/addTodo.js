import React, {Component} from 'react';

class AddTodo extends Component {

    state = {title: ''};
    onChange_todo = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onChange_date = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.do_until);
        this.setState({title: ''});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input class="col-md-10"
                           type='text'
                           name='title'
                           placeholder='Новое дело'
                           style={{flex: '10'}}
                           value={this.state.title}
                           height='150px'
                           onChange={this.onChange_todo}
                    />
                    <input class="col-md-1.5"
                           type='date'
                           name='do_until'
                           style={{flex: '1.5'}}
                           value={this.state.do_until}
                           onChange={this.onChange_date}
                    />

                    <input class="col-md-0.5"
                           type='submit'
                           value='Добавить'
                           className='btm'
                           style={{flex: '0.5'}}
                    />
            </form>
        );
    }
}
export default AddTodo;