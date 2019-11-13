import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import About from "./components/About";
import Author from "./components/Author";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Получить 20 по MobDev',
        date: '2019-11-14',
        completed: false
      },
      {
        id: 2,
        title: 'Разобраться с компьютерным зрением',
        date: '2020-09-24',
        completed: false
      },
      {
        id: 3,
        title: 'Изучить React',
        date: '2020-03-23',
        completed: false
      },
      {
        id: 4,
        title: 'Изучить Angular',
        date: '2020-01-11',
        completed: true
      },
      {
        id: 5,
        title: 'Сдать ГОСы',
        date: '2020-06-31',
        completed: false
      }
    ]
  };
  
  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title, date) => {
    const len = this.state.todos.length;
    const newTodo = {
      id: len + 1,
      title: title,
      date: date,
      completed: false,
    };
    console.log(this.state.todos.sort((prev, next) => {
      if ( prev.title < next.title ) return -1;
      if ( prev.title < next.title ) return 1;
  }));
    this.setState({ todos: [...this.state.todos, newTodo]});
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
            <Route path='/author' component={Author} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
