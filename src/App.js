import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import Filter from "./components/filter";

class App extends React.Component{
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

  addTodo = (title) => {

    if (title === '') {
      alert("VBEI CHENIT")
      return
    }

    const newOne = {
      id: this.generateUUID(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newOne]})
    this.placeHolder = [...this.state.todos, newOne]

  }


  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header/>
            <AddTodo addTodo={this.addTodo}/>
            <Filter clear={this.clear} search={this.search}/>
            <Todos todos={this.state.todos}
                   markComplete={this.markComplete}
                   delTodo={this.delTodo}
            />
          </div>
        </div>
    );
  }
}

export default App;
