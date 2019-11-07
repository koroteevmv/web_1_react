import React, {Component} from 'react';
import AddTodo from "./addTodo";
import Filter from "./filter";
import Todos from "./Todos";

class TodoPage extends Component {
    state = {
        todos:[
            {
                id: 1,
                title: 'Прийти в университет',
                completed: false,
                deadline: new Date(2019, 10, 10),
                show: true,
            },
            {
                id: 2,
                title: 'Сдать все работы',
                completed: true,
                deadline: new Date(2019, 11, 20),
                show: true,
            },
            {
                id: 3,
                title: 'Начать готовиться к сессии',
                completed: false,
                deadline: new Date(2019, 11 , 10),
                show: true,
            },
        ]
    };

    // Загрузка сохраненных дел, если такие есть
    componentWillMount() {
        const myTodos = localStorage.getItem('Мой список дел');
        if (myTodos !== null) {
            this.setState({
                todos: JSON.parse(myTodos)
            })
        }
    }

    // Сохранение дел при изменении списка
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('Мой список дел', JSON.stringify(nextState.todos));
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
        this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});
    }

    sortTodo = () => {
        console.log("Сортировка сработала", this.state.todos);
        this.setState({todos: (this.state.todos.sort(function(a,b) {
                return a.deadline - b.deadline;
            }))})
    }

    addTodo = (todo) => {
        console.log("Добавляется такое дело:", todo);
        this.setState({todos: (this.state.todos.concat([{
                id: Date.now(),
                title: todo.value,
                completed: false,
                deadline: new Date(todo.deadline),
                show: true
            }]))}, () => this.sortTodo())
    };

    filterTodos = (title) => {
        console.log("Фильтр сработал");
        if (title === "") {
            this.setState({
                todos: this.state.todos.map(todo => {
                    todo.show = true;
                    return todo;
                })
            })} else {
            this.setState({
                todos: this.state.todos.map(todo => {
                    todo.title.toLowerCase() === title ? todo.show = true : todo.show = false;
                    return todo;
                })
            })
        }
    }

    render() {
        return (
            [
                <AddTodo addTodo={this.addTodo}/>,
                <Filter filter={this.filterTodos}/>,
                <h1>Наведите на дело в списке, чтобы увидеть дедлайн для него!</h1>,
                <Todos todos={this.state.todos}
                   markComplete={this.markComplete}
                   delTodo={this.delTodo}
                />
            ]
        );
    }
}

export default TodoPage;
