import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component{
  state = {
      todos: JSON.parse(window.localStorage.getItem("todos")) == null ? [
      {
        id: 1,
        title: 'Вынести мусор',
        completed: false,
          deadline : new Date('2019-07-16')
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        completed: false,
          deadline : new Date('2019-07-17')
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
          deadline : new Date('2019-07-15')
      },
    ] : JSON.parse(window.localStorage.getItem("todos"))
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
  };

  addTodo = (todo) => {
    this.state.todos.push({title : todo, deadline : new Date()});
    this.setState({todos: this.state.todos});
    let data = JSON.stringify(this.state.todos);
    window.localStorage.setItem("todos", data);
  };

  filterTodos = (fTitle) => {
    this.setState({todos: this.state.todos.filter((e) => e.title === fTitle)})
  };

  render() {
      return (
        <div className="App">
          <div className="container">
            <Header/>
            <AddTodo addTodo = {this.addTodo} filterTodos = {this.filterTodos} />
            <Todos todos={this.state.todos}
                   markComplete={this.markComplete}
                   delTodo={this.delTodo}
            />
              <Router>
                  <div>
                      <ul>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li>
                              <Link to="/about">Contact</Link>
                          </li>
                      </ul>

                      <hr />

                      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                      <Switch>
                          <Route exact path="/">
                            <h2>Сноска - домашняя страница</h2>
                          </Route>
                          <Route path="/about">
                              <h2>Сноска - страница контактов</h2>
                              <h2>ООО "Бэст мобайл программерс"</h2>
                              <h3>Телефон : 8-800-555-35-35</h3>
                          </Route>
                      </Switch>
                  </div>
              </Router>
          </div>
        </div>
    );
  }
}

export default App;
