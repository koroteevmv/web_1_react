import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import FilterTodo from "./components/filterTodo";
import DowloadTodos from "./components/DowloadTodos";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import * as jsPDF from 'jspdf'


class App extends React.Component{
  state = {
    todos:[
      {
        id: 1,
        title: 'Вынести мусор',
        date: "25.10.2019",
        completed: false,
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        date: "26.10.2019",
        completed: false,
      },
      {
        id: 3,
        title: 'Совещание на работе',
        date: "23.10.2019",
        completed: false,
      },
    ],
    filter_title: ""
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
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title, date) => {
    const len = this.state.todos.length;
    const newTodo = {
      id:len+1,
      title: title,
      date: date,
      completed: false,
    };
    this.setState({todos: [...this.state.todos, newTodo]});
    };

  filterTodosByTitle = (title) => {
    this.setState({filter_title: title});
  };

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
        <div className="App">
          <div className="container">
          <Header/>
           <Route exact path='/' render={props => (
               <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <br/>
                  <FilterTodo filterTodo={this.filterTodosByTitle} />
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Срок до</th>
                        <th scope="col">Удалить</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Todos todos = {this.state.todos}
                            markComplete = {this.markComplete}
                            delTodo = {this.delTodo}
                            filter_title = {this.state.filter_title}
                      />
                    </tbody>
                  </table>

                  <DowloadTodos downloadTxtFile = {this.downloadTxtFile} />
               </React.Fragment>
           )}/>

           <Route exact path='/about' 
                 component={About}/>

            <Route exact path='/сontacts' 
                 component={Contacts}/>
          </div>

        </div>
    );
  }
}

export default App;
