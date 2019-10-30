import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/addTodo";
import Filtr from "./components/Filtr";

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
  addTodo = title => {
    if (title === "") {
      alert("Для добавления дела, сначала впишите его.");
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

  Fil = false;
  FiltrTodo = title => {
    if (title === "") {
      alert("Введите в поле фильтрации имя");
    }
    if (title !== "") {
      this.todosCopy = this.state.todos;
      this.Fil = true;
      this.setState(
        { todos: this.state.todos.filter(todo => todo.title === title) },
        () => console.log(this.state.todos)
      );
    }
  };
  delFiltr = () => {
    if (this.Fil === true) {
      this.setState({ todos: this.todosCopy });
    }
  };

  UNSAFE_componentWillMount() {
    if (localStorage.getItem("plans")) {
      this.setState({
        todos: JSON.parse(localStorage.getItem("plans"))
      });
    }
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("plans", JSON.stringify(nextState.todos));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Filtr FiltrTodo={this.FiltrTodo} delFiltr={this.delFiltr} />
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
