import React, {Component} from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import personalCredentials from '../db.json';
import commercialCredentials from '../dbc.json';
import Demo from './Demo';

class Login extends React.Component{
  constructor(){
  super();
  this.state={
    username:'',
    password:'',
    type:'',
    personalCredentials:personalCredentials,
    commercialCredentials:commercialCredentials,
    validation : false,
  };
  
  } 

  handleUsername=(event)=>{
    this.setState({
   username:event.target.value
    }) 
  }
  
  handlePassword=(event)=>{
    this.setState({
   password:event.target.value
    }) 
  }

  handleRadio=(event)=>{
   
    this.setState({
      type:event.target.value
    })
  }



  handleSubmit = (formSubmitEvent) => {

    if(this.state.type==='retail'){
this.state.personalCredentials.map(user=>{
  if(user.username===this.state.username&& user.password===this.state.password  )
  {
    
    this.props.history.push('/HomePage',{username:this.state.username})
    
  }
  
 
})
    }

  if(this.state.type==='commercial'){
     
    this.state.commercialCredentials.map(user=>{
      if(user.username===this.state.username&& user.password===this.state.password  )
      {
        console.log("yes")
        this.props.history.push('/Demo')
        
      }
      else {console.log("invalid user")
    alert("check ur details")
    }
   
  })
   
}


}

  render(){
    
    return(
<div style={{ width: '100%', overflow: 'hidden' }}>
<div className='login container-fluid'>

<div className='login1'>
  <span style={{color:'white'}}>OPTIMA</span><small style={{ marginLeft: '6px', paddingTop: '10px', fontSize: '16px', color: 'white'}}><i>Pay Less, Save More</i></small>
</div>

<div className='row' >

<div className='col-5' style={{ paddingLeft: '50px' }}>
<img style={{ width: '85%' }} src='loginpage.png' />
</div>

<div className='col-7' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
<form onSubmit={this.handleSubmit}>

<div className='Login_Background' style={{ paddingTop: '49px', paddingLeft: '38px' }}>
  <div className='Sign_in_to_your_account'>
    Sign in to your account
  </div>

        <div className="buttons" style={{ width: '80%' }}>
          
          <div style={{ marginTop: '19.9px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ float: 'left' }}>
              <input name="type" value="retail" onChange={this.handleRadio} type='radio' id="retail" /> Personal
              </div>
            <div style={{ float: 'right' }}>
              <input name="type" value="commercial" onChange={this.handleRadio} type='radio' id="commercial" /> Commercial
              </div>
          </div>
        
        </div>
        <div>
        <input type='text' value={this.state.username} onChange={this.handleUsername} className='field_outline' style={{ marginTop: '28px' }}
          placeholder='User name'  id="username" autoFocus={true} />
        <input type='password' value={this.password} onChange={this.handlePassword} className='field_outline' style={{ marginTop: '13.9px' }}
          placeholder='Password'  id="password"  />
        </div>
          <div style={{ marginTop: '19.9px' }}>
          <div style={{ float: 'left', marginRight: '10px' }}>
            <input type='checkbox' />
          </div>
          <div style={{}}>
            <div className=''>Keep me signed in</div>
          </div>
        </div>

       
        <button type= 'submit'  className='button_background ' style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer'
        }}
         >
          SIGN IN  
        </button>
  
   
</div>
</form>
</div>
</div>
</div>
</div>
    );
}}

export default Login;