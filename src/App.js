import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacts from "./components/Contacts";
import Filtration from "./components/Filtration"
class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Вынести мусор',
        completed: false,
        kdney: 3,
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        completed: true,
        kdney: 7,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
        kdney: 8,
      },
    ]
  };
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
  addTodo = (title, kdney) => {
    if (title === '' | kdney === '') {
      alert('Введите дело и количество дней')
    }
      else {
        if (kdney > 0 & kdney < 1000) {
          const len = this.state.todos.length;
          const newTodo = {
            id: len + 1,
            title: title,
            kdney: kdney,
            completed: false
          };
          this.setState({todos: [...this.state.todos, newTodo].sort((a, b) => a.kdney > b.kdney ? 1 : -1)},
              () => {
                this.todosCopy = this.state.todos;
                localStorage.setItem('plans', JSON.stringify(this.state.todos));
              })
        }
      }
  };

  UNSAFE_componentWillMount() {
    if (localStorage.getItem('plans')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('plans'))
      })
    }
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('plans', JSON.stringify(nextState.todos));
  }
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  state = {
    todos:[
      {
        id: 1,
        title: 'Вынести мусор',
        kdney: 3,
        completed: false,
      },
      {
        id: 2,
        kdney: 7,
        title: 'Встреча с друзьями',
        completed: false,
      },
      {
        id: 3,
        kdney: 8,
        title: 'Совещание на работе',
        completed: false,
      },
    ]
  };
  Fil = false;
  FiltrationTodo = (title) => {
    if(title !== ''){
      this.todosCopy = this.state.todos;
      this.Fil = true;
      this.setState({todos: this.state.todos.filter(todo => todo.title === title)},
          () => console.log(this.state.todos));}
  };
  delFiltration = () => {
    if(this.Fil === true){
      this.setState({todos:this.todosCopy})
    }
  };
  render() {
    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header/>
              <Route exact path='/' render={props => (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Filtration FiltrationTodo = {this.FiltrationTodo} delFiltration = {this.delFiltration}/>
                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}/>
                  </React.Fragment>
              )}/>
              <Route path='/Contacts'
                     component={Contacts}/>
            </div>
          </div>
        </Router>
    );
  }
}
export default App;
