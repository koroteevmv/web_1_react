import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {title: '', filter: '', clear_filter: ''};
    }

    onChange_todo = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.filter(this.state.title, this.state.filter);
    };

    onClick = (e) => { //отмена фильтра
        e.preventDefault();
        this.props.clear_filter();
        this.setState({title: ''});
    };

    render() {
        return (
            <div style={SRCH_Style}>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input className="col-md-10"
                           type='text'
                           name='title'
                           placeholder='Поиск дел'
                           style={{flex: '10'}}
                           value={this.state.title}
                           height='150px'
                           onChange={this.onChange_todo}
                    />

                    <input className="col-md-1"
                           type='submit'
                           value='Поиск'
                           className='btm'
                           style={{flex: '1.5'}}
                    />

                    <input className="col-md-1"
                           type='submit'
                           value='Х'
                           className='btm'
                           style={{flex: '0.5'}}
                           onClick={this.onClick}
                    />
                </form>
            </div>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.func.isRequired,
    nofilter: PropTypes.func.isRequired
};


const SRCH_Style = {
    marginTop: '8px',
};
export default Filter;