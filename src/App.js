import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { Switch, Route } from 'react-router-dom';
import kotyata from "./components/kotyata";

class App extends React.Component {
  constructor(props) {
    super(props);

    };

  render() {
    return (
      <div className="App">
        <Header/>
        <h3 className="form__label">МЕНЮ</h3>
        <Navigation />
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/kotyata' component={kotyata}/>
          </Switch>
        <Footer />

            
      </div>
    );
  }
}

export default App;
