import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/Pages/About';
import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import Filter from "./components/Filter";

class App extends React.Component{
  state = {
    todos:[
      {
        id: 1,
        title: 'Вынести мусор',
        completed: false,
        do_until: '2019-10-24',
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        completed: false,
        do_until: '2019-10-24',
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
        do_until: '2019-10-24',
      },
      {
        id: 4,
        title: 'Купить хлеб',
        completed: false,
        do_until: '2019-10-24',
      },
      {
        id: 5,
        title: 'Забрать посылку с почты',
        completed: false,
        do_until: '2019-10-24',
      },
    ]
  };

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
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});
  }


  addTodo = (title, do_until) => {

    if (localStorage.getItem('Filtered_todos') !== null) {
      alert ("Сначала отмените фильтр!");
    }

    else {
      const len = this.state.todos.length;
      const newTodo = {
        id:len+1,
        title: title,
        completed: false,
        do_until: do_until,
      };
      this.setState({todos: [...this.state.todos, newTodo]});
    }
  };

    componentWillMount() {
        localStorage.getItem('Todo_list') && this.setState({
            todos: JSON.parse(localStorage.getItem('Todo_list'))
        })
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Todo_list', JSON.stringify(nextState.todos));
    }

    filter = (titletext) => {

      if (localStorage.getItem('Filtered_todos') !== null) {
        alert ("Сначала отмените фильтр!");
      }

      else {
        alert(titletext);
        localStorage.setItem('Filtered_todos', JSON.stringify(this.state.todos));
        this.setState({todos: [...this.state.todos.filter(todo => todo.title.toLowerCase().indexOf(titletext.toLowerCase()) != -1 )]});
      }
    };

    clear_filter = () => {
      if (localStorage.getItem('Filtered_todos') !== null) {
        this.setState({ todos: JSON.parse(localStorage.getItem('Filtered_todos')) });
        localStorage.removeItem("Filtered_todos");
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
                   <Filter filter={this.filter} clear_filter={this.clear_filter}/>
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
