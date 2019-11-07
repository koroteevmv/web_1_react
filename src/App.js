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

    let Data = new Date();
    let Year = Data.getFullYear();
    let Month = Data.getMonth() +1;
    let Day = Data.getDate();
    if((Day+' ').length <= 2){
      Day = '0'+Day;
      //alert(Day);
    };

    const cur_date = Year+'-'+Month+'-'+Day;

    if (localStorage.getItem('Filtered_todos') !== null) {
      alert ("Сначала отмените фильтр!");
    }

    else {
      const len = this.state.todos.length;
      let max_id = 0;
      for (var i = 0; i < len; i++) {
        if (this.state.todos[i].id > max_id) {
          max_id = this.state.todos[i].id;
        }
      }

      const newTodo = {
        id: max_id + 1,
        title: title,
        completed: false,
        do_until: do_until,
      };

      function compare(a, b) {
        let today = new Date(cur_date);

        let len_a = a.do_until;
        let len_b = b.do_until;

        let date1 = new Date(len_a);
        let date2 = new Date(len_b);

        let daysLag1 = Math.ceil(Math.abs(today.getTime() - date1.getTime()) / (1000 * 3600 * 24));
        let daysLag2 = Math.ceil(Math.abs(today.getTime() - date2.getTime()) / (1000 * 3600 * 24));

        let comparison = 0;
        if (daysLag1 > daysLag2) {
          comparison = 1;
        } else if (daysLag1 < daysLag2) {
          comparison = -1;
        }
        return comparison;
      }

      this.setState({todos: [...this.state.todos, newTodo].sort(compare)}, () => localStorage.setItem('Todo_list', JSON.stringify(this.state.todos)));
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
