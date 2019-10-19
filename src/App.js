import React from 'react';
//import './App.css';
//import Todos from './components/Todos'
import Header from "./components/layout/header";
//import AddTodo from "./components/addTodo";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/pages/About";
import App_Todos from './App_Todos';
import Video from './components/pages/Video';


class App extends React.Component{
render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <Header />
                        </div>
                    </div>
                    <Router>
                        <Switch>
                            <Route path="/about">
                               <About />
                            </Route>  
							<Route path="/video">
                               <Video />
                            </Route>  
                            <Route path="/">
							
                                <App_Todos />

                            </Route>
							
                        </Switch>
                    </Router >
                </div>
            </div>
        )
    };
}

export default App;
