import React from 'react';
import './App.css';
import Header from "./components/layout/header";
import Navbar from "./components/layout/navbar";
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import SaveTodos from './components/SaveTodos';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';


class App extends React.Component{
    state = {
        todos:[
            {
                id: 1,
                title: 'Построить дом',
                period: '3 days',
                completed: false,
            },
            {
                id: 2,
                title: 'Посадить дерево',
                period: '4 days',
                completed: true,
            },
            {
                id: 3,
                title: 'Сделать лабу 3.2',
                period: '41 days',
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

    delTodo = (id) => {
        // alert(id);
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]} , () => localStorage.setItem('saved_todos', JSON.stringify(this.state.todos))  );
        // localStorage.setItem('saved_todos', JSON.stringify(this.state.todos));
    };

    componentWillMount() {
        // alert('hereeeee');
        localStorage.getItem('saved_todos') && this.setState({
            todos: JSON.parse(localStorage.getItem('saved_todos'))
        })
    }

    filter = (titletext) => {
        // alert(titletext);
        // const len = this.state.todos.length;
        // localStorage.setItem( 'SelectedOption', option );
        localStorage.setItem('todos', JSON.stringify(this.state.todos));

        this.setState({todos: [...this.state.todos.filter(todo => todo.title.toLowerCase().indexOf(titletext.toLowerCase()) != -1 )]});

        // for (let i = 0; i < len; i++) {
        //
        //     this.setState({todos: [...this.state.todos.filter(todo => todo.title.toLowerCase() === title.toLowerCase())]});
            // alert(this.state.todos[i].title.toLowerCase()+ " "+ title.toLowerCase());
        //     if (this.state.todos[i].title.toLowerCase().indexOf(title.toLowerCase()) != -1) {
        //         alert("есть контакт");
        //         // this.setState({todos: [...this.state.todos.filter(todo => todo.title.toLowerCase() === title.toLowerCase())]});
        //         this.setState({todos: [...this.state.todos[i]]});
        //     }
        // }
        // alert("filter");
    };

    nofilter = () => {
        // alert("nofilter");

        if (localStorage.getItem('todos') !== null) {
            // alert("herebhjdfbghj");
            this.setState({ todos: JSON.parse(localStorage.getItem('todos')) });
            localStorage.removeItem("todos");
        }

    };


    // filter(titletext){
    //     alert(titletext);
    //     let filteredList = this.state.todos.title.filter(function(item){
    //         return item.toLowerCase().search(text.toLowerCase())!== -1;
    //     });
    //     this.setState({items: filteredList});
    //
    //     let filteredData = this.state.data.fil
    //     ter((item) =>{
    //         return item.title.toLowerCase().indexOf(this.props.filterToChild) !== -1;
    //     });
    //
    //     function filterBy(title) {
    //         return this.state.todos.filter(item => item[title] === title);
    //     }
    //     this.setState(filterBy(this.state.todos, title));
    //
    //     this.setState(this.state.todos.filter(u => u.includes(this.state.filter)));
    // }

    // filter = (title) => {
    //     alert(title);
    //     this.setState({todos: [...this.state.todos.filter(todo => todo.title !== title)]});
    // };

    // filter = (titlefilter) => {
    //     // alert(titlefilter);
    //     // let filteredPoets = this.state.title;
    //     let filteredPoets = this.state.todos.filter((title) => {
    //         alert(title);
    //         let poetName = title.toLowerCase();
    //         return poetName.indexOf(
    //             titlefilter.toLowerCase()) !== -1
    //     });
    //     this.setState({
    //         filteredPoets
    //     })
    // }

    savetodos = () => {

        // alert(title);
        // this.setState({todos: [...this.state.todos.filter(todo => todo.title !== title)]});

        if (localStorage.getItem('todos') !== null) {
            alert ("Сначала отмените фильтр!");
        }
        else {
            localStorage.setItem('saved_todos', JSON.stringify(this.state.todos));
            alert("Пользовательский список дел сохранен!");
        }
    };

    addTodo = (title, period) => {

        if (localStorage.getItem('todos') !== null) {
            alert ("Сначала отмените фильтр!");
        }
        else {

            const len = this.state.todos.length;
            // const last_id = this.state.todos[len-1].id;

            let max_id = 0;
            for (var i = 0; i < len; i++) {
                if (this.state.todos[i].id > max_id) {
                    max_id = this.state.todos[i].id;
                }
            }
            // alert(this.state.todos.id);
            // let periods = [];
            // for (var i = 1; i <= len; i++) {
            //     periods.push(this.state.todos[i]);
            // }

            // let i = 0;
            // let period_len = this.state.todos[0].period.length;
            // // alert(period+ " "+ Number.parseInt(this.state.todos[i].period.substring(0, period_len-5)));
            // while (period >= Number.parseInt(this.state.todos[i].period.substring(0, period_len-5)) && i<=len-1) {
            //     i++;
            //     period_len = this.state.todos[i].period.length;
            //     // alert(period+ " "+ Number.parseInt(this.state.todos[i].period.substring(0, period_len-5)));
            // }

            const newTodo = { //создается новое туду
                id: max_id + 1,
                title: title,
                period: period + " days",
                completed: false,
            };

            function compare(a, b) {
                // Используем toUpperCase() для преобразования регистра
                let len_a = a.period.length;
                const genreA = Number.parseInt(a.period.substring(0, len_a - 5));
                let len_b = b.period.length;
                const genreB = Number.parseInt(b.period.substring(0, len_b - 5));

                let comparison = 0;
                // alert(genreA + " "+ genreB);
                if (genreA > genreB) {
                    comparison = 1;
                    // alert(genreA + ">" + genreB);
                } else if (genreA < genreB) {
                    comparison = -1;
                    // alert(genreA + "<" + genreB);
                }
                return comparison;
            }

            this.setState({todos: [...this.state.todos, newTodo].sort(compare)}, () => localStorage.setItem('saved_todos', JSON.stringify(this.state.todos))  );
            // localStorage.setItem('saved_todos', JSON.stringify(this.state.todos));

            // alert(this.state.todos.sort(compare)[0].title + " "+ this.state.todos.sort(compare)[1].title + " "+ this.state.todos.sort(compare)[2].title);
            // this.state.todos.sort(compare);  //сортировка туду
            // this.state.todos = this.state.todos.sort(compare);
            // // alert(this.state.todos.sort(compare)[0].title + " "+ this.state.todos.sort(compare)[1].title + " "+ this.state.todos.sort(compare)[2].title);
            // this.setState({todos: [...this.state.todos]});
            // alert("here");
        }
    };

    render() {

        // if ((localStorage.getItem('saved_todos') !== null) && (localStorage.getItem('todos') == null)) { //что-то сохранено и фильтр не включен
        //     // alert("Отображен пользовательский список дел");
        //     this.setState({ todos: JSON.parse(localStorage.getItem('saved_todos')) });
        //     localStorage.removeItem("saved_todos");
        // }


        return (
            <Router>
            <div className="App">
                <div className="container">
                    <Header/>
                    <Navbar/>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <Filter filter={this.filter} nofilter={this.nofilter}/>
                            {/*<Nofilter nofilter={this.nofilter} />*/}
                    <AddTodo addTodo={this.addTodo} />
                    {/*<SaveTodos savetodos={this.savetodos} />*/}
                    <Todos todos={this.state.todos}
                           markComplete={this.markComplete}
                           delTodo={this.delTodo}
                    />
                        </React.Fragment>
                    )} />

                    <Route path="/contacts" component={Contacts} />
                    <Route path="/about" component={About} />
                </div>
            </div>
            </Router>
        );
    }
}

export default App;

