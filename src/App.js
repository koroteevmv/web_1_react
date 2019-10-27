import React from "react";
import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import About from "./About";
import List from "./List";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/List" component={List} />
        <Route path="/About" component={About} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
