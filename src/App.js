import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    todos:[
      {
        id: 1,
        title: 'Не пропустить солнечное затмение',
        completed: false,
      },
      {
        id: 2,
        title: 'Увидеть закат в самолете',
        completed: true,
      },
      {
        id: 3,
        title: 'Встретить новый год в другой стране',
        completed: false,
      },
    ]
  };
  this.addTodo = this.addTodo.bind(this);
    }
  //Добавление дела
  addTodo = (title, date) => {
	this.state = { todos: [...this.state.todos, { 
	id: this.state.todos.length, 
	title: title,  
	completed: false,
	DateOfTodo: date,}] }
 this.setState(this.state);
  };
  // Toggle complete
  markComplete =(id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
      }) });
  };

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header/>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos}
                   markComplete={this.markComplete}
                   delTodo={this.delTodo}
            />
          </div>
        </div>
    );
  }
}

export default App;
