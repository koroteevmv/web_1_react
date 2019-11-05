import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import About from "./components/About";
import Filtr from "./components/Filtr";
import { BrowserRouter as Router, Route} from 'react-router-dom';
class App extends React.Component{
  state = {
    todos:[
      {
        id: 12,
        title: 'Вынести мусор',
        completed: false,
        duration: 2,
      },
      {
        id: 13,
        title: 'Встреча с друзьями',
        completed: true,
        duration: 3,
      },
      {
        id: 14,
        title: 'Совещание на работе',
        completed: false,
        duration: 4,
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



  addTodo = (title,duration) => {
if (title.length<1){
  alert('ОШИБКА!')

}
else {
  const len = this.state.todos.length;
  const newTodo = {
    id: len + 1,
    title: title,
    duration: duration,
    completed: false
  };
  this.setState({todos: [...this.state.todos, newTodo].sort((a, b) => a.duration > b.duration ? 1 : -1)},
      () => {
        this.todosCopy = this.state.todos;
        localStorage.setItem('i', JSON.stringify(this.state.todos));
      })
}
  }
  ;

  componentWillMount() {
    if (localStorage.getItem('i')) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('i'))
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('i', JSON.stringify(nextState.todos));
  }


  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  state = {
    todos:[
      {
        id: 12,
        title: 'Вынести мусор',
        completed: false,
        duration: 2,
      },
      {
        id: 13,
        title: 'Встреча с друзьями',
        completed: false,
        duration: 3,
      },
      {
        id: 14,
        title: 'Совещание на работе',
        completed: false,
        duration: 4,
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
                    <h1>Things to do</h1>
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}/>
                             <h1 align={'left'}>Filter</h1>
                             <Filtr FiltrTodo = {this.FiltrTodo} delFiltr = {this.delFiltr}/>
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
