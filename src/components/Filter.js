import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddTodo from "./AddTodo";

export class Filter extends Component {
    state = {
        title: '',
        filter: '',
    };
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit1 = (e) => {
        e.preventDefault();
        this.props.filter(this.state.title, this.state.filter);
        this.setState({title: '', filter: ' '});
    };

    onClick1 = (e) => { //отмена фильтра
        e.preventDefault();
        this.props.nofilter();

        // alert(JSON.parse(localStorage.getItem('todos')));
        // this.setState({ todos: JSON.parse(localStorage.getItem('todos')) });
        // localStorage.removeItem("todos");

    };

    render() {
        return (
            <form
                  style={{display: 'flex'}}>

                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-sm">

                <input type='text'
                       name='title'
                       placeholder='Поиск'
                       style={{flex: '10', height: '40px', width: '100%'}}
                       value={this.state.title}
                       onChange={this.onChange}
                       class="form-control" //bootstrap
                />

                {/*<input type='submit'*/}
                {/*       value='Фильтровать'*/}
                {/*       className='btm'*/}
                {/*    // role="button" //bootstrap*/}
                {/*       class="btn btn-outline-secondary" //bootstrap*/}
                {/*       style={{flex: '1', height: '40px'}}*/}
                {/*/>*/}
                        </div>
                        <div className="col-sm">

                <button
                    // type='submit'
                    //    value='Фильтровать'
                       className='btm'
                       onClick={this.onSubmit1}
                    // role="button" //bootstrap
                       className="btn btn-outline-secondary" //bootstrap
                       style={{flex: '1', height: '40px', width: '100%'}}
                >Фильтровать</button>

            </div>
            <div className="col-sm">

                <button
                    // type='submit'
                       // value='Отменить фильтр'
                       className='btm'
                       onClick={this.onClick1}
                    // role="button" //bootstrap
                       className="btn btn-outline-danger" //bootstrap
                       style={{flex: '1', height: '40px', width: '100%'}}
                >Отменить фильтр</button>
                    </div>
                    </div>
                </div>
            </form>
        );
    }
}
Filter.propTypes = {
    filter: PropTypes.func.isRequired,
    nofilter: PropTypes.func.isRequired
};

export default Filter;

