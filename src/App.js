import React from 'react';
import './App.css';
import one from "./components/one";
import two from "./components/two";
import three from "./components/three";
import Header from "./components/layout/header";
import { Switch, Route } from 'react-router-dom';
import Menu from "./components/menu";

class App extends React.Component{

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header/>
            <Menu/>
            <hr/>
            <Switch>
              <Route exact path='/' component={one}/>
              <Route exact path='/two' component={two}/>
              <Route exact path='/three' component={three}/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
