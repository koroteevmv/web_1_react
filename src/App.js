import React from 'react';

import './App.css';

import Todos from './components/Todos'

import Header from "./components/layout/header";

import AddTodo from "./components/addTodo";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from "./components/About";

import Filtr from "./components/Filtr"

class App extends React.Component {

  state = {

    todos: [

      {

        id: 1,

        title: 'Вынести мусор',

        completed: false,

        duration: 6,

      },

      {

        id: 2,

        title: 'Встреча с друзьями',

        completed: true,

        duration: 4,

      },

      {

        id: 3,

        title: 'Совещание на работе',

        completed: false,

        duration: 2,

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









  addTodo = (title, duration) => {

    if (title === '' | duration === '') {

      alert('Введите дело')

    }

    else{

      if (duration <= 0){

        alert('Введите число >0')

      }

      else{

        const len = this.state.todos.length;

        const newTodo = {

          id: len + 1,

          title: title,

          duration: duration,

          completed: false

        };

        this.setState({todos: [...this.state.todos, newTodo ].sort( (a,b) => a.duration > b.duration ? 1: -1 ) },

            () => {this.todosCopy = this.state.todos; localStorage.setItem('List', JSON.stringify(this.state.todos));})

      }

    }

  };



  componentWillMount() {

    if (localStorage.getItem('Dela')) {

      this.setState({

        todos: JSON.parse(localStorage.getItem('Dela'))

      })

    }

  }



  componentWillUpdate(nextProps, nextState) {

    localStorage.setItem('Dela', JSON.stringify(nextState.todos));

  }



  delTodo = (id) => {

    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});

  }

  state = {

    todos:[

      {

        id: 1,

        title: 'Вынести мусор',

        duration: 1,

        completed: false,

      },

      {

        id: 2,

        duration: 2,

        title: 'Встреча с друзьями',

        completed: false,

      },

      {

        id: 3,

        duration: 3,

        title: 'Совещание на работе',

        completed: false,

      },

    ]

  };

  Fil = false;

  FiltrTodo = (title) => {

    if(title != ''){



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



                    <AddTodo addTodo={this.addTodo}/>

                    <Filtr FiltrTodo = {this.FiltrTodo} delFiltr = {this.delFiltr}/>

                    <Todos todos={this.state.todos}

                           markComplete={this.markComplete}

                           delTodo={this.delTodo}/>

                  </React.Fragment>

              )}/>

              <Route path='/About'

                     component={About}/>

            </div>

          </div>

        </Router>

    );

  }

}

export default App;