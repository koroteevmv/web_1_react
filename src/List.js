import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/addTodo";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Понять происходящее",
        completed: false
      },
      {
        id: 2,
        title: 'Создать приложение "список дел"',
        completed: false
      },
      {
        id: 3,
        title: "Сделать дополнительные задания",
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

  addTodo = title => {
    if (title === "") {
      alert("Введите дело");
    } else {
      const len = this.state.todos.length;
      const newTodo = {
        id: len + 1,
        title: title,
        completed: false
      };

      this.setState({ todos: [...this.state.todos, newTodo] });
    }
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
          <AddTodo addTodo={this.addTodo} />
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
