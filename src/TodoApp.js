import React from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from "./components/addTodo";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.db = {
      todos: [
        {
          id: 0,
          title: 'Чаепитие',
          dueDate: '2019-10-02',
          completed: false,
        },
        {
          id: 1,
          title: 'Аттестация по ТРПДМУ',
          dueDate: '2019-11-07',
          completed: true,
        },
        {
          id: 2,
          title: 'Доделать ДЗ по информационной безопасности',
          dueDate: '2019-11-25',
          completed: false,
        },
      ]
    };

    this.state = this.db;

    this.displayedTodos = this.state;
    this.filterText = React.createRef();

    this.addTodo = this.addTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);

  }
  // Toggle complete
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

  delTodo = (id) => {
    this.db = { todos: [...this.state.todos.filter(todo => todo.id !== id)] }
    this.setState(this.db);
  }

  addTodo(text, date) {
    this.db = { todos: [...this.db.todos, { id: this.state.todos.length, title: text, dueDate: date, completed: false }] }
    this.setState(this.db);
  }

  filterTodos(event) {
    this.setState({ todos: this.db.todos.filter(todo => todo.title.match(new RegExp(this.filterText.current.value, 'i')) != null) });
  }

    downloadTxtFile = () => {
    var all_todos_text = '';
    for (var todo of this.state.todos)
    {
      all_todos_text = all_todos_text + String(todo.id) + " " + String(todo.title) + " " + String(todo.date) + "\n";
    }

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(all_todos_text));
    element.setAttribute('download', "myFile.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  };


  render() {
    return (
      <div className="TodoApp">
          <AddTodo addTodoHandler={this.addTodo} />
          <hr />
          <div className="row mb-2">
            <form>
              <div className="col">
                <input type='text'
                  name='filterText'
                  placeholder='Filter'
                  ref={this.filterText}
                  className='form-control'
                  onInput={this.filterTodos}
                />
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col">
              <Todos todos={this.state.todos}
                length={this.state.todos.length}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default TodoApp;
