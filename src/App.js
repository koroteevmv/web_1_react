import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/layout/About";
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        completed: true,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
      },
    ]
  };
  addTodo = (title) => {
    const len = this.state.todos.length;
    const newTodo = {
      id: len + 1,
      title: title,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo]},
        () => {
          this.todosCopy = this.state.todos;
          localStorage.setItem('td', JSON.stringify(this.state.todos));
        })
  };

  componentWillMount() {
    if (localStorage.getItem('td')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('td'))
      })
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('td', JSON.stringify(nextState.todos));
  }
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
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
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
        completed: true,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
      },
    ]
  };

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header/>
            <AddTodo/>
            <Todos todos={this.state.todos}
                   markComplete={this.markComplete}
                   delTodo={this.delTodo}
            />
            <Route path="/layout/About" component={About} />
          </div>
        </div>
    );
  }
}

export default App;
