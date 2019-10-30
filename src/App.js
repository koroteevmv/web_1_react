import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import "./bootstrap.min.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Вынести мусор",
        duration: 1,
        completed: false
      },
      {
        id: 2,
        duration: 6,
        title: "Встреча с друзьями",
        completed: false
      },
      {
        id: 3,
        duration: 5,
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
  addTodo = title => {
    const len = this.state.todos.length;
    const newTodo = {
      id: len + 1,
      title: title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
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
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="popover"
            title="Перейти на контакты"
          >
            Контакты
          </button>
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
