import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Вынести мусор",
        completed: false
      },
      {
        id: 2,
        title: "Встреча с родственниками",
        completed: true
      },
      {
        id: 3,
        title: "Совещание на работе",
        completed: false
      }
    ]
  };
  // Toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
