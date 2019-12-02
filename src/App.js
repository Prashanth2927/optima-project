import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import Header from './Components/Header';

//import { useMediaQuery } from 'react-responsive'


class App extends Component {

  
render(){

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/HomePage" component={HomePage} />
      </Switch>
    </div>
  </Router>
    
    
    
  
  );
}
}
export default App;
