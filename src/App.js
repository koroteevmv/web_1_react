import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/Header";
import AddTodo from "./components/addTodo";
import Filtr from "./components/Filtr"
import About from "./components/About";
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Поспать',
        completed: false,
        day: 4,
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        completed: true,
        day: 5,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
        day: 6,
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
  componentWillMount() {
    if (localStorage.getItem('save')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('save'))
      })
    }
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('save', JSON.stringify(nextState.todos));
  }
  addTodo = (title, day) => {
    if (title === '' | day === '') {
      alert('Введите задачу и выберите количество дней')
    }
    else {

        const len = this.state.todos.length;
        const newTodo = {
          id: len + 1,
          title: title,
          day: day,
          completed: false
        };
        this.setState({todos: [...this.state.todos, newTodo].sort((a, b) => a.day > b.day ? 1 : -1)},
            () => {
              this.todosCopy = this.state.todos;
              localStorage.setItem('save', JSON.stringify(this.state.todos));
            })

    }
  };
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  state = {
    todos:[
      {
        id: 1,
        title: 'Поспать',
        day: 4,
        completed: false,
      },
      {
        id: 2,
        day: 5,
        title: 'Встреча с друзьями',
        completed: false,
      },
      {
        id: 3,
        day: 6,
        title: 'Совещание на работе',
        completed: false,
      },
    ]
  };
  F = false;
  FiltrTodo = (title) => {
    if(title !== ''){
      this.todosCopy = this.state.todos;
      this.F = true;
      this.setState({todos: this.state.todos.filter(todo => todo.title === title)},
          () => console.log(this.state.todos));}
  };
  delFiltr = () => {
    if(this.F === true){
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
