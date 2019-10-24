import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class SaveTodos extends Component {
    state = {
        title: '',
    };
    // onChange = (e) => this.setState({
    //     [e.target.name]: e.target.value
    // });

    onClickSave = (e) => {
        // e.preventDefault();
        // this.props.addTodo(this.state.title);
        // this.setState({title: ''});
        // alert('saving todos');
        e.preventDefault();
        this.props.savetodos();
        // this.setState({title: ''});

    };


    render() {
        return (
            <form
                  style={{display: 'flex'}}>

                {/*<input type='submit'*/}
                {/*       value='Добавить'*/}
                {/*       className='btm'*/}
                {/*    // role="button" //bootstrap*/}

                {/*       class="btn btn-outline-primary" //bootstrap*/}
                {/*       style={{flex: '1', height: '40px'}}*/}
                {/*/>*/}

                <button
                    // type='submit'
                    //    value='Фильтровать'
                    className='btm'
                    onClick={this.onClickSave}
                    // role="button" //bootstrap
                    className="btn btn-outline-success" //bootstrap
                    style={{flex: '1', height: '40px'}}
                >Сохранить список дел</button>

                {/*<button*/}
                {/*    // type='submit'*/}
                {/*    //    value='Фильтровать'*/}
                {/*    className='btm'*/}
                {/*    onClick={this.onClickSave}*/}
                {/*    // role="button" //bootstrap*/}
                {/*    className="btn btn-outline-success" //bootstrap*/}
                {/*    style={{flex: '1', height: '40px'}}*/}
                {/*>Показать сохраненный список дел</button>*/}

            </form>
        );
    }
}
SaveTodos.propTypes = {
    savetodos: PropTypes.func.isRequired
};
export default SaveTodos;

