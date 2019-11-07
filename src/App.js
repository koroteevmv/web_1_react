import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import Podval from "./components/Podval";
import Filter from "./components/filter";
import Menu from "./components/Menu";
import AboutMe from "./components/AboutMe";
import TodoPage from "./components/TodoPage";
import Contacts from "./components/Contacts";
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{width: '1000px', margin: '0 auto'}}>
        <Header/>
        <Menu/>
        <Switch>
          <Route exact path='/' component={TodoPage}/>
          <Route exact path='/aboutme' component={AboutMe}/>
          <Route exact path='/contacts' component={Contacts}/>
        </Switch>
          <Podval/>
      </div>
    );
  }
}

export default App;
