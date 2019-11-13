import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/addTodo'
import FiltrName from './components/filtrName'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from "./components/About";
import Header from "./components/layout/header";
import Menu from "./components/Menu";
import Contacts from "./components/Contacts";

class App extends React.Component{

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
                duration: 6,
                title: 'Встреча с друзьями',
                completed: false,
            },
            {
                id: 3,
                duration: 5,
                title: 'Совещание на работе',
                completed: false,
            },
        ]
    };

    markComplete =(id) => {
        this.setState({ todos: this.state.todos.map(todo =>{
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }) });
    };
    todosCopy;
    delTodo = (id) => {
        if(this.flagFiltra === false){
            this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]},
                ()=> {localStorage.setItem('List', JSON.stringify(this.state.todos))})
        }
        else{
            this.todosCopy = this.todosCopy.filter(todo=>todo.id !== id);
            localStorage.setItem('List', JSON.stringify(this.todosCopy));
            this.setState({todos:[...this.state.todos.filter(todo=>todo.id !== id)]})
        }
    };
    addTodo = (title, duration) => {
        if (title === '' | duration === ''){
            alert('Вы не ввели дело или его продолжительность')
        }
        else{
            if (duration <= 0){
                alert('Продолжительности не может быть отрицательной или равной нулю')
            }
            else{
                if(this.flagFiltra === true){
                    alert('Вам нужно сначала отменить фильрацию, а потом добавить новое дело')
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
        }
    };
    flagFiltra = false;
    filtrTodo = (title) => {
        if(title === ''){
            alert('Вы не ввели критерий фильтрации!!')
        }
        else{
            this.todosCopy = this.state.todos;
            this.flagFiltra = true;
            this.setState({todos: this.state.todos.filter(todo => todo.title === title)});
        }

    };
    cancelFiltr = () => {
        if(this.flagFiltra === true){
            this.flagFiltra = false;
            this.setState({todos:this.todosCopy})
        }
    };

    componentWillMount() {
        if(localStorage.getItem('List') !== null){
            this.setState({todos: JSON.parse(localStorage.getItem('List'))})
        }
    }
    render() {
        return (
            <Router>
                <div className='App'>
                    <div className="container">
                        <Header/>
                        <Route exact path='/' render={props=>(
                            <React.Fragment>
                                <Menu/>
                                <AddTodo addTodo = {this.addTodo} />
                                <FiltrName filtrTodo = {this.filtrTodo} cancelFiltr = {this.cancelFiltr}/>
                                <Todos todos= {this.state.todos}
                                       markComplete={this.markComplete}
                                       delTodo={this.delTodo}
                                />
                            </React.Fragment>
                        )}/>
                        <Route path='/about' component={About}/>
                        <Route path='/contacts' component={Contacts}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
