import React from 'react';

class Filter extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			      filterText:''
		};
		this.filterText = React.createRef();
  }
	
	onClick = (e) => {


        e.preventDefault();


        this.props.filterTodos(this.state.filterText);


    };
    onClickRes = (e) => {
        e.preventDefault();
        this.props.Reset();
        this.setState({filterText:''})
    }


    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
	render(){
		return(
			<form>
				<div className="form-row mb-2">
					<label className="col-md-2">Фильтр по названию:</label>
				    <div className="col-md-6">
						<input type='text'
						name='filterText'
						placeholder='Введите здесь'
						className='form-control'
						onChange={this.onChange}
						value= {this.state.value}
						ref={this.filterText}
						/>
					</div>
					<div className="col-md-1">
						<button type="submit"
						className='btn btn-dark'
						onClick={this.onClick}> Hайти </button> 
					</div>
					<div className="col-md-2">
						<button type="submit"
					className='btn btn-dark'
						onClick={this.onClickRes} >Сбросить фильтр</button>
					</div>
				</div>
			</form>
		)
	}
}

export default Filter;