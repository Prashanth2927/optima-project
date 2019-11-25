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

  /*const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
 */
render(){
 /*let HomePage = null;
 if(this.state.showHome){
HomePage = { HomePage };



}*/

  return (
    <React.Fragment>
      <Router>
    <div className="App">
    
     <Login />
     
     <Switch>
 
    <Route path="/HomePage" component={HomePage} />
    </Switch>
    
    </div>
    </Router>
   </React.Fragment>
  
  );
}
}
export default App;
