import React, { Component } from 'react';
//import './App.css';
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
import Demo from './Components/Demo';
//import { useMediaQuery } from 'react-responsive'


class App extends Component {

  
render(){

  return (
   <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/HomePage" component={HomePage} />
      <Route path="/Demo" component={Demo} />
      </Switch>
    </div>
  </Router>

  /*<div className="App">
    <Demo />

    </div>
    */
    
    
  
  );
}
}
export default App;
