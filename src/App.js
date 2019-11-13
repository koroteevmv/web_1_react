import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import Filtr from "./components/Filtr";
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'To do 1 thing',
        completed: false,
      },
      {
        id: 2,
        title: 'To do 2 thing',
        completed: true,
      },
      {
        id: 3,
        title: 'To do 3 thing',
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
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  TF = false;
  FiltrTodo = (title) => {
    if(title !== ''){
      this.todosCopy = this.state.todos;
      this.TF = true;
      this.setState({todos: this.state.todos.filter(todo => todo.title === title)},
          () => console.log(this.state.todos));}
  };
  cancelF = () => {
    if(this.TF === true){
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

                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}/>
                           <Filtr FiltrTodo = {this.FiltrTodo} cancelF = {this.cancelF}/>
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
