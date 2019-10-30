import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./components/About";
import Filtr from "./components/Filtr"
class App extends React.Component {
  state = {
    todos: [
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
  addTodo = (title) => {
    if (title === '' ) {
      alert('Введите что-нибудь!')
    }
    else {

        const len = this.state.todos.length;
        const newTodo = {
          id: len + 1,
          title: title,
          completed: false
        };
        this.setState({todos: [...this.state.todos, newTodo].sort((a, b) => a.id > b.id ? 1 : -1)},
            () => {
              this.todosCopy = this.state.todos;
              localStorage.setItem('sv', JSON.stringify(this.state.todos));
            })

    }
  };

  UNSAFE_componentWillMount() {
    if (localStorage.getItem('sv')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('sv'))
      })
    }
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('sv', JSON.stringify(nextState.todos));
  }
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
        completed: false,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
      },
    ]
  };
  Fil = false;
  FiltrTodo = (title) => {
    if(title !== ''){
      this.todosCopy = this.state.todos;
      this.Fil = true;
      this.setState({todos: this.state.todos.filter(todo => todo.title === title)},
          () => console.log(this.state.todos));}
  };
  delFiltr = () => {
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
                    <Filtr FiltrTodo = {this.FiltrTodo} delFiltr = {this.delFiltr}/>
                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}/>
                  </React.Fragment>
              )}/>
              <Route path='/About'
                     component={About}/>
            </div>
          </div>
        </Router>
    );
  }
}
export default App;
