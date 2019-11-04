import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import Filter from "./components/filter";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./components/about"

class App extends React.Component{
  state = {
    todos:[
      {
        id: 1,
        title: 'Вынести мусор',
        completed: false,
        duration: 80,
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        completed: false,
        duration: 70,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
        duration: 60,
      },
    ]
  };

  placeHolder = this.state.todos
  clear = () => {
    this.setState({todos:this.placeHolder})
  }

  search = (title) => {
    if (title === '') {
      alert("VBEI CHENIT")
      return
    }
    this.placeHolder = this.state.todos
    this.setState(
      {
        todos: this.state.todos.filter(todo => todo.title === title)
      }
    )
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
      }) });
  };

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  addTodo = (title, duration) => {

    if (title === '') {
      alert("VBEI CHENIT")
      return
    }

    const newOne = {
      id: this.generateUUID(),
      title: title,
      completed: false,
      duration: duration,
    }
    const temporary =  [...this.state.todos, newOne].sort((a,b) => a.duration > b.duration ? 1: -1 ).reverse()
    
    this.setState({todos: temporary})
    this.placeHolder = temporary

  }


  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Filter clear={this.clear} search={this.search}/>
              <Todos todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
              />
            </React.Fragment>
          )}/>
          <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
