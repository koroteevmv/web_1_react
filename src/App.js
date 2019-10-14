import React from 'react';
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/Footer";
import HolyBootstrap from "./components/HolyBootstrap";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { Switch, Route } from 'react-router-dom';
import Calculator from "./components/Calculator";

class App extends React.Component {
  constructor(props) {
    super(props);

    };

  render() {
    return (
      <div className="App">
        <Header/>
        <h3 className="form__label">ГЛАВНОЕ МЕНЮ</h3>
        <Navigation />
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/calculator' component={Calculator}/>
          </Switch>
        <Footer />
          <h3 className="form__label"> Осторожно, снизу какая-то вакханалия бутстраповская</h3>
            <HolyBootstrap />
      </div>
    );
  }
}

export default App;
