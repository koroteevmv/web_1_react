import React from 'react';


class Filter extends React.Component{
    state = {
        title: ''
    }
    
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    handlerClear = (e) => {
        e.preventDefault();
        this.props.clear()
    }

    handlerSearch = (e) => {
        e.preventDefault();
        this.props.search(this.state.title)
    }

    render() {
        return (
            <form style={{display: 'flex'}}>
                <input type='text'
                       name='title'
                       placeholder=''
                       value={this.state.title}
                       style={{flex: '10'}}
                       onChange={this.onChange}
                />
                <button type="search"
                        className="btn btn-danger"
                        onClick={this.handlerSearch}>Search</button>
                <button type="clear"
                        className="btn btn-danger"
                        onClick={this.handlerClear}>clear</button>
            </form>
        );
    }
}

export default Filter;
