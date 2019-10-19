// JavaScript source code
import React from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from "./components/addTodo";

class App_Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
    this.displayedTodos = this.state;
    this.addTodo = this.addTodo.bind(this);
  }

  //Добавление дела
  addTodo = (title) => {
	this.state = { todos: [...this.state.todos, { 
	id: this.state.todos.length+1, 
	title: title,  
	completed: false,}]
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
  
  render() {
    return (
      <div className="App_Todos">
          <AddTodo addTodo={this.addTodo} />
          <div className="row">
            <div className="col">
              <Todos todos={this.state.todos}
                length={this.state.todos.length}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default App_Todos;