import React from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from "./components/addTodo";
import Filter from "./Filter";

class App_Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Не пропустить солнечное затмение',
          completed: false,
		  DateOfTodo: '2026-08-12',
        },
        {
          id: 2,
          title: 'Увидеть закат в самолете',
          completed: true,
		  DateOfTodo: '2018-12-13',
        },
        {
          id: 3,
          title: 'Встретить новый год в другой стране',
          completed: false,
		  DateOfTodo: '2019-12-31',
        },
      ]
    };
    this.displayedTodos = this.state;
    this.addTodo = this.addTodo.bind(this);
	this.filterText = React.createRef();
	this.filterTodos = this.filterTodos.bind(this);
  }

  componentWillMount() {
	localStorage.getItem('ListOfTodos') && this.setState({
		todos: JSON.parse(localStorage.getItem('ListOfTodos'))
	})
  }

componentDidMount() {
	this.state = { todos: [...this.state.todos]}
}

  //Добавление дела
  addTodo = (title, date) => {
	this.state = { todos: [...this.state.todos, { 
	id: this.state.todos.length+1, 
	title: title,  
	completed: false,
	DateOfTodo: date,}]
	}	
	this.setState(this.state);
  };
  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }) });
  };
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  Flag = false;
  filterTodos = (filterText) => {
    if(filterText != ''){
      this.todosCopy = this.state.todos;
      this.Flag = true;
      this.setState({todos: this.state.todos.filter(todo => todo.title.match(new RegExp(filterText, 'i')) != null)},
          () => console.log(this.state.todos));}
		  		   		   		  
  };
  
  Reset = (filterText) => {
    if(this.Flag === true){
      this.setState({todos: this.todosCopy},
          () => console.log(this.state.todos))};
  };

  componentWillUpdate(nextProps, nextState) {
	localStorage.setItem('ListOfTodos', JSON.stringify(nextState.todos));
  }

  render() {
    return (
      <div className="App_Todos">
          <AddTodo addTodo={this.addTodo} />
		  <Filter filterTodos = {this.filterTodos} Reset = {this.Reset}/>
          <div className="row">
            <div className="col">
				{this.state.todos.length ? (
					<Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
				) : ( 
					<span className='text-muted'> Тут два варианта: либо Вы удалили все свои дела, либо нет совпадений по фильтру :) </span>
				)}
            </div>
          </div>
        </div>
    );
  }
}

export default App_Todos;