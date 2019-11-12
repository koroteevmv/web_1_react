import React from 'react';

class Filter extends React.Component{
    state = {
        title: ''
    }

    filterDelo = (e) => {
        e.preventDefault();
        this.props.filterTodo(this.state.title);
    }

    render() {
        return (
            <React.Fragment>
            <form onSubmit={this.filterDelo} className='addForm' style={{display: 'flex', background: '#333', marginTop: '30px', marginBottom: '30px', height: '71px'}}>
                <input
                    type='text'
                    name='title'
                    placeholder='Фильтруйте же!'
                    style={{flex: '10', border: '3px solid black', borderRight: '3px solid purple'}}
                    value={this.state.title}
                    onChange={e => this.setState({title: e.target.value})}
                />
                <input
                    type='submit'
                    value='Фильтровать'
                    className='btm linearFon'
                    style={{flex: '1', border: 'none'}}
                />
            </form>
                <h1 className='linearFon'>Если хотите сбросить фильтр, <br/> отфильтруйте с его пустым значением</h1>
            </React.Fragment>
        );
    }
}

export default Filter;
