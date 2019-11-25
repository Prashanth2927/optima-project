import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const Login = () => {
   
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
<div className='Login_Background' style={{ paddingTop: '49px', paddingLeft: '38px' }}>
  <div className='Sign_in_to_your_account'>
    Sign in to your account
  </div>

        <div className="buttons" style={{ width: '80%' }}>
          
          <div style={{ marginTop: '19.9px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ float: 'left' }}>
              <input name="type" value="retail" type='radio' id="retail" /> Personal
              </div>
            <div style={{ float: 'right' }}>
              <input name="type" value="commercial" type='radio' id="commercial" /> Commercial
              </div>
          </div>
        
        </div>
        <div>
        <input type='text' className='field_outline' style={{ marginTop: '28px' }}
          placeholder='User name'  id="username" autoFocus={true} />
        <input type='password' className='field_outline' style={{ marginTop: '13.9px' }}
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

        <Link to="/HomePage">
        <button className='button_background ' style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer'
        }}
         >
          SIGN IN  
        </button>
    </Link>
   
</div>
</div>
</div>
</div>
</div>
    );
}

export default Login;