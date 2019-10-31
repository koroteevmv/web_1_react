import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/Header";
import Filtr from "./components/Filtr";
import Contacts from "./components/Contacts";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./components/About";
    class App extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Вынести мусор',
                completed: false,
                duration: 2,
            },
            {
                id: 2,
                title: 'Встреча с друзьями',
                completed: true,
                duration: 3,
            },
            {
                id: 3,
                title: 'Совещание на работе',
                completed: false,
                duration: 4,
            },
        ]
    };
    addTodo = (title, duration) => {
        if (title === '' | duration === '') {
            alert('Вы что-то не ввели')
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
                    () => {this.todosCopy = this.state.todos; localStorage.setItem('Sh', JSON.stringify(this.state.todos));})
        }
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
    componentWillMount() {
        if (localStorage.getItem('Sh')) {
            this.setState({
                todos: JSON.parse(localStorage.getItem('Sh'))
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Sh', JSON.stringify(nextState.todos));
    }
    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }
    state = {
        todos:[
            {
                id: 1,
                title: 'Вынести мусор',
                duration: 2,
                completed: false,
            },
            {
                id: 2,
                duration: 3,
                title: 'Встреча с друзьями',
                completed: false,
            },
            {
                id: 3,
                duration: 4,
                title: 'Совещание на работе',
                completed: false,
            },
        ]
    };
    Fil = false;
    FiltrTodo = (title) => {
        if(title !== ''){

            this.todosCopy = this.state.todos;
            this.Fil = true;
            this.setState({todos: this.state.todos.filter(todo => todo.title === title)},
                () => console.log(this.state.todos));}
    };
    dFiltr = () => {
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
                                <Todos todos={this.state.todos}
                                       markComplete={this.markComplete}
                                       delTodo={this.delTodo}/><h1>Фильтр</h1>
                                       <Filtr FiltrTodo = {this.FiltrTodo} dFiltr = {this.dFiltr}/>
                            </React.Fragment>
                        )}/>
                        <Route path='/About'
                               component={About}/>
                        <Route path='/Contacts'
                               component={Contacts}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
