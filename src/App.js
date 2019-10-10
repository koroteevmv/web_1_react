import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";

class App extends React.Component{
  state = {
    todos:[
      {
        id: 1,
        title: 'Вынести мусор',
        completed: false,
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        completed: false,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
      },
      {
        id: 4,
        title: 'Купить хлеб',
        completed: false,
      },
      {
        id: 5,
        title: 'Забрать посылку с почты',
        completed: false,
      },
    ]
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

  addTodo = (title) => {
    const len = this.state.todos.length;
    const newTodo = {
      id:len+1,
      title: title,
      completed: false,
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  };

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
