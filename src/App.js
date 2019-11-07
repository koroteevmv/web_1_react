import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacts from "./components/Contacts";
import Filtration from "./components/Filtration"
class App extends React.Component {
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
  addTodo = (title, duration) => {
    if (title === '' | duration === '') {
      alert('Type todo and duration')
    }
    else {
      if (duration > 0 & duration < 1000) {
        const len = this.state.todos.length;
        const newTodo = {
          id: len + 1,
          title: title,
          duration: duration,
          completed: false
        };
        this.setState({ todos: [...this.state.todos, newTodo].sort((a, b) => a.duration > b.duration ? 1 : -1) },
          () => {
            this.todosCopy = this.state.todos;
            localStorage.setItem('todos_', JSON.stringify(this.state.todos));
          })
      }
    }
  };

  UNSAFE_componentWillMount() {
    if (localStorage.getItem('todos_')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todos_'))
      })
    }
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('todos_', JSON.stringify(nextState.todos));
  }
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  state = {
    todos: [
      {
        id: 1,
        title: 'Вынести мусор',
        duration: 3,
        completed: false,
      },
      {
        id: 2,
        duration: 7,
        title: 'Встреча с друзьями',
        completed: false,
      },
      {
        id: 3,
        duration: 8,
        title: 'Совещание на работе',
        completed: false,
      },
    ]
  };
  Fil = false;
  FiltrationTodo = (title) => {
    if (title !== '') {
      this.todosCopy = this.state.todos;
      this.Fil = true;
      this.setState({ todos: this.state.todos.filter(todo => todo.title === title) },
        () => console.log(this.state.todos));
    }
  };
  delFiltration = () => {
    if (this.Fil === true) {
      this.setState({ todos: this.todosCopy })
    }
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <div class="header d-flex flex-wrap flex-column">
                  <AddTodo addTodo={this.addTodo} />
                  <Filtration FiltrationTodo={this.FiltrationTodo} delFiltration={this.delFiltration} />
                </div>
                <Todos todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/Contacts'
              component={Contacts} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
