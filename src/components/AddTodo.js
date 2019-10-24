import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: '',
        period: ''
    };
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.period);
        this.setState({title: '', period: ''});

    };


    render() {
        return (
            <form onSubmit={this.onSubmit}
                  style={{display: 'flex'}}>

                <div className="container">
                    <div className="row no-gutters">
                        <div class="col-sm">

                <input type='text'
                       name='title'
                       placeholder='Введите дело'
                       style={{flex: '10', height: '40px', width: '100%'}}
                       value={this.state.title}
                       onChange={this.onChange}
                       class="form-control" //bootstrap
                    required
                />

                        </div>
                        <div class="col-sm">
                            <div className="input-group-append" >
                <input type="number"
                       name="period"
                       value={this.state.period}
                       onChange={this.onChange}
                       className="form-control"
                       placeholder="Срок выполнения" //bootstrap
                       aria-label="Recipient's username"
                       aria-describedby="basic-addon2"
                       style={{width: '76%', height: '40px' }}
                       pattern="[0-9]{,3}"
                       required
                />
                        <span className="input-group-text" id="basic-addon2" style={{width: '24%', display: 'inline', height: '40px'}}>days</span>
                    </div>

                        </div>
                        <div class="col-sm">

                <input type='submit'
                       value='Добавить'
                       className='btm'
                       // role="button" //bootstrap
                       class="btn btn-outline-primary" //bootstrap
                       style={{flex: '1', height: '40px', width: '100%'}}
                />

                        </div>
                    </div>
                </div>

            </form>
        );
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};
export default AddTodo;

