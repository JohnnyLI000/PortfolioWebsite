import React, { Component } from 'react';
import './App.css';
import Home from './HomePage/Home.js';
import FiservSocialApp from './ProjectPage/FiservSocialApp.js';
import { Route, BrowserRouter as Router} from "react-router-dom";
class App extends Component {
  state = {  }
  render() { 
    return (
      <Router>
          <Route exact path="/" component={Home}></Route>
          <Route path="/FiservSocialApp" component={FiservSocialApp}></Route>
      </Router>
    );
  }
}

export default App;
