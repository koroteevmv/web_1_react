import React from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from "./AddTodo";
import Filter from "./Filter";

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos:[
                {
                    id: 1,
                    title: 'Завести детей',
                    completed: false,
                    date: new Date(2018, 11, 12),
                    isFiltered: true,
                },
                {
                    id: 2,
                    title: 'Покушать',
                    completed: true,
                    date: new Date(2019, 4, 2),
                    isFiltered: true,
                },
                {
                    id: 3,
                    title: 'Жениться на Шреке',
                    completed: false,
                    date: new Date(2005, 10, 15),
                    isFiltered: true,
                },
                {
                    id: 4,
                    title: 'Получить 20 баллов',
                    completed: false,
                    date: new Date(2019, 9, 18),
                    isFiltered: true,
                }
            ],
            filterValue: "",
        };

        this.addTodo = this.addTodo.bind(this);
        this.filterTodos = this.filterTodos.bind(this);
        this.onResetClick = this.onResetClick.bind(this);
    }

    componentWillMount() {
        localStorage.getItem('Todos list') && this.setState({
            todos: JSON.parse(localStorage.getItem('Todos list'))
        })
    }

    componentDidMount() {
        this.setState({todos: this.state.todos.sort(function(a,b) {
                return a.date - b.date;
            })});
    }

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

    addTodo(title, date) {
        this.setState({todos: (this.state.todos.concat([{
                id: Date.now(),
                title,
                completed: false,
                date,
                isFiltered: title.toLowerCase() === this.state.filterValue || this.state.filterValue === "",
            }])).sort(function(a,b) {
                return a.date - b.date;
            })
        })
        console.log(title);
        console.log(this.state.filterValue);
    }

    filterTodos(title) {
        this.setState({todos: this.state.todos.map(todo => {
                if (todo.title.toLowerCase() === title || title === "") {
                    todo.isFiltered = true
                } else {
                    todo.isFiltered = false
                }
                return todo;
            }), filterValue: title})
    }

    onResetClick() {
        this.setState({todos: this.state.todos.map(todo => {todo.isFiltered = true; return todo;}), filterValue: ""});
        console.log(this.state.todos);
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Todos list', JSON.stringify(nextState.todos));
    }

    render() {
        console.log(this.state.todos);
        return (
                <div className="container">
                    <h3 className="form__label"> Добавьте своё дело прямо здесь вот!!</h3>
                    <AddTodo onCreate = {this.addTodo}/>
                    {this.state.todos.every(todo => todo.isFiltered) ? "" : <p>Значение фильтра: <span style={{color: "red", fontWeight: "700", marginRight: "20px"}}>{this.state.filterValue}</span><button className={"form__button"} onClick={this.onResetClick}>Сбросить</button></p>}
                    {this.state.todos.length ? (<Todos todos={this.state.todos}
                                                       markComplete={this.markComplete}
                                                       delTodo={this.delTodo}
                        />)
                        : <p className="some-trouble">DAMN, НУ И ЗАЧЕМ ТЫ УДАЛИЛ ВСЕ ТУДУСЫ?</p>}
                    {this.state.filterValue !== "" && !this.state.todos.some(todo => todo.isFiltered) ? <h1 style={{textAlign: "center", color: "red", fontWeight: "700"}}>НЕТУ СОВПАДЕНИЙ</h1> : ""}
                    <h3 className="form__label"> Снизу находится мистер-фильтр</h3>
                    <Filter onFilter = {this.filterTodos} />
                </div>
        );
    }
}

export default HomePage;
