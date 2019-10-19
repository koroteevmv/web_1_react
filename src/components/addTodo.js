import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
constructor(props) {
        super(props);
        this.input = React.createRef();
        this.DateOfTodo = React.createRef();
    }
	render() {
        return (
             <form>
                <div className="form-row mb-2">
                    <div className="col-md-6">
                        <input type='text'
                            name='title'
                            placeholder='Добавьте дело здесь'
                            ref={this.input}					
                            className='form-control'

                        />
                    </div>
					
                    <div className="col-md-1">
                        <button type="reset"
                            value='Submit'
                            className='btn btn-dark'
                            onClick={() => this.props.addTodo(this.input.current.value)}
                        >Добавить</button>
                    </div>
                </div>
            </form >
        );
    }
}
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};
export default AddTodo;
