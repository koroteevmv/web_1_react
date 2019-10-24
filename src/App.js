import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
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

  addTodo = (title) => {
    const len = this.state.todos.length;
    const newTodo = {
      id: len + 1,
      title: title,
      completed: false,
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  };

  componentWillMount() {
    if (localStorage.getItem('Dela')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('Dela'))
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('Dela', JSON.stringify(nextState.todos));
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});
  }

  Fil = false;
  filtrTodo = (title) => {
    if(title != ''){

      this.todosCopy = this.state.todos;
      this.Fil = true;
      this.setState({todos: this.state.todos.filter(todo => todo.title === title)},
          () => console.log(this.state.todos));}

  };
  delFiltr = () => {
    if(this.Fil === true){
      this.setState({todos: this.l},
          () => console.log(this.l))};
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
                    <Filtr filtrTodo = {this.filtrTodo} delFiltr = {this.delFiltr}/>
                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}/>
                  </React.Fragment>
              )}/>
              <Route path='/about'
                     component={About}/>
            </div>
          </div>
        </Router>
    );
  }
}
export default App;
