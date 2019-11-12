import React from 'react';
import AddTodo from "./addTodo";
import Todos from "./Todos";
import Filter from "./filter";

class one extends React.Component{
    state = {
        todos: [
            {
                id: 1,
                title: 'Купить кофе',
                completed: false,
                vidno: true,
                date: new Date(2005, 10, 15),
            },
            {
                id: 2,
                title: 'Сходить в зоопарк',
                completed: false,
                vidno: true,
                date: new Date(2020, 10, 11),
            },
            {
                id: 3,
                title: 'Подумать о вечном',
                completed: false,
                vidno: true,
                date: new Date(2019, 11, 11),
            },
        ]
    };

    markComplete = (id) => {
        console.log(id);
        this.setState({ todos: this.state.todos.map(todo =>{
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }) });
    };

    delTodo = (id) => {
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    };

    dobavitDelo = (todo) => {
        const { id, title, completed, vidno, date } = todo;
        console.log(id);
        this.setState(prevState => ({todos: prevState.todos.concat([{ id, title, completed, vidno, date}]).sort(function(a,b) {
                return a.date - b.date;
            })}))
    };

    filterIt = (todo) => {
        if (todo === '') {
            this.setState(prevState => ({todos: prevState.todos.map(
                    (todos) => {
                        todos.vidno = true;
                        return todos;
                    }
                ).sort(function(a,b) {
                    return a.date - b.date;
                })}))
            return;
        }
        this.setState(prevState => ({todos: prevState.todos.map(
                (todos) => {
                    todos.title.toLowerCase() === todo.toLowerCase() ? todos.vidno= true : todos.vidno= false;
                    return todos
                }
            )}))
    };


    componentWillMount() {
        console.log(this.state.todos, '-В САМОМ НАЧАЛЕ')
        this.setState(prevState => {
            todos: prevState.todos.sort(function(a,b) {
                return a.date - b.date;
            })
        })
        if (localStorage.getItem('Список дел') === null) {
            console.log("Сохраненный список дел не обнаружен!!!");
            return
        }
        const todos = JSON.parse(localStorage.getItem('Список дел'));
        todos.map((todo) => {
            todo.date = new Date(todo.date.slice(0,10));
            return todo
        })
        this.setState({
            todos: todos
        }, ()=>(console.log(this.state.todos, '-после загрузки')))

    }

    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props !== prevProps.todos) {
            localStorage.setItem('Список дел', JSON.stringify(this.state.todos));
        }
    }

    render() {
        console.log(this.state.todos, "Список текущих тудусов");
        return (
            <React.Fragment>
                <AddTodo dobavit={this.dobavitDelo}/>
                <Todos todos={this.state.todos}
                       markComplete={this.markComplete}
                       delTodo={this.delTodo}
                />
                <Filter filterTodo={this.filterIt}/>
           </React.Fragment>
        );
    }
}

export default one;
