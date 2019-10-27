import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import Filtr from "./components/filtrTodo";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./components/About";
import Creater from "./components/creater";
class App extends React.Component{
  state = {
    todos:[
      {
        id: 1,
        title: 'Вынести мусор',
        completed: false,
        date: new Date(2019, 11, 12)
      },
      {
        id: 2,
        title: 'Встреча с друзьями',
        completed: false,
        date: new Date(2019, 10, 27)
      },
      {
        id: 3,
        title: 'Совещание на работе',
        completed: false,
        date: new Date( 2019, 10, 29)
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
  isDeletedWhileFiltred = false;
  delTodo = (id) => {
    if(this.isFiltered === false){
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]},
          () => localStorage.setItem('Todos', JSON.stringify(this.state.todos)))
    }
    else{
      this.isDeletedWhileFiltred = true;
      localStorage.setItem('Todos', JSON.stringify(JSON.parse(localStorage.getItem('Todos')).filter(todo => todo.id !== id)))
      this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }
  };
  addTodo = (title, date) => {
    if(title === ''){
      alert('Вы не ввели название дела, которое необходимо добавить')
    }
    else{
      if(date === ''){
        alert("Вы не указали дату выполнения дела")
      }
      else{
        if ( new Date() - new Date(date) > 0){
          alert('Извините, данное дело нельзя добавить в список дел, ' +
              'так как срок его выполнения прошел!')
        }
        else{
          const len = this.state.todos.length;
          const newTodo = {
            id:len+1,
            title: title,
            completed: false,
            date: date,
          };
          if(this.isFiltered === true){
            localStorage.setItem('Todos', JSON.stringify(JSON.parse(localStorage.getItem('Todos')).concat([newTodo])))
          }
          else{
            this.setState({todos: [...this.state.todos, newTodo].sort((a,b)=>a.date > b.date ? 1: -1)},
                () => localStorage.setItem('Todos', JSON.stringify(this.state.todos)));
          }
        }
      }
    }
  };
  isFiltered = false;
  filtr = (title, todos) => {
    if(title===''){
      alert('Не ввели условие отбора')
    }
    else {
      if(this.isFiltered === true){
        alert('Извинете, вы уже применили фильтрацию. Для дальнейшей работы необходимо сбросить фильтр')
      }
      else{
        this.isFiltered = true;
        localStorage.setItem('Todos', JSON.stringify(todos));
        this.regexp = new RegExp(`${title.toLocaleLowerCase()}`)
        this.t = [];
        for (let i=0;i < this.state.todos.length; i++){
          let res = this.state.todos[i].title.toLocaleLowerCase().match(this.regexp);
          console.log(res)
          if(res !== null){
            this.t.push(this.state.todos[i]);
          }
        }
        this.setState({todos:this.t});
      }
    }
  };
  cancel = () => {
    if(this.isFiltered === true && this.isDeletedWhileFiltred === false){
      this.isFiltered = false;
      this.setState({todos: JSON.parse(localStorage.getItem('Todos')).sort((a,b)=>a.date > b.date ? 1: -1)});
    }
    else if(this.isFiltered === true && this.isDeletedWhileFiltred === true){
      this.setState({todos: JSON.parse(localStorage.getItem('Todos'))})
      console.log(localStorage.getItem('Todos'))
    }
  };
  componentWillMount() {
    if(localStorage.getItem('Todos') !== null){
      this.setState({todos: JSON.parse(localStorage.getItem('Todos'))})
    }
  }
  render() {
    return (
        <Router>
          <div className="App">
            <div className="container">
              <Header/>
              <Route exact path='/' render ={props=>(
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo}/>
                    <Filtr filtr = {this.filtr}
                           todos = {this.state.todos}
                           cancel = {this.cancel}
                    />
                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}
                    />
                  </React.Fragment>
                  )}/>
                  <Route path = '/about' component={About}/>
                  <Route path='/creater' component={Creater}/>

            </div>
          </div>
        </Router>
    );
  }
}

export default App;
