import React from 'react';
import './HomePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Paper} from 'paper-react';
import Header from './Header';
import Demo from './demo';
import Card from './Card';

const HomePage = () => {
        return (
          <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
<Header />

            <div style = {{display:"flex", position:'fixed', top:'0'}}>
            
            <div className="sidebar-wrapper" style={{ display: "flex", flexDirection: 'column', background: 'white' }}>
          
          <div style={{ padding: "20px", marginTop: '121px' }}>
          <img style={{ cursor: 'pointer' }} className='ic_home' src={'./images/ichome.png'} />
        </div>
        
        <div style={{ padding: "20px", marginTop: '60px' }}>
          
            <img className='ic_home' src={'./images/icwallet.png'} />
        </div>
        
        <div style={{ padding: "20px", marginTop: '60px' }}>
          <img className='ic_home' src='./images/report.png' />
        </div>

         </div>    
        

          <div className='row main-content' style = {{backgroundColor:"#f5f6fa",width:"230%",height:'100vh',overflow:'auto', marginTop:'12px'}}>
          <div className='col-9' style={{paddingTop:'5%'}}>

  
            <div className="title">
              <p className = 'My_financials' style={{marginBottom:'2px', marginLeft:'35px'}}>My financials</p>
            </div>
          
            <div className = 'banner-11' style={{ marginLeft:'35px', display:'flex' ,backgroundImage:'url("../../../../images/Banners/img-banner.png")', backgroundRepeat:'no-repeat', width:'115%'}}>
                <div className="banner-col">
                  <span className = 'Savings-accounts1' style ={{whiteSpace: 'nowrap',display: 'block'}}>Debit Accounts</span>
                  <span className = 'layer1'>3</span>
                  <span className = 'Credit-Accounts1' style ={{whiteSpace: 'nowrap'}}>Credit Accounts</span>
                  <span className = 'layer1'>3</span>
                </div>

                <div  style = {{display:'flex',flexDirection:'column'}}>
                <span className = 'Savings-accounts1'  style ={{whiteSpace: 'nowrap'}}>Debit Balance</span>
                <span className = 'layer1' style ={{whiteSpace: 'nowrap'}}>£ 1200</span>
                <span className = 'Credit-Accounts1'  style ={{whiteSpace: 'nowrap'}}>Credit outstanding</span>
                <span className = 'layer1' style ={{whiteSpace: 'nowrap'}}>£ 3000</span>
                </div>

                <div  style = {{display:'flex',flexDirection:'column'}}>
                <span className = 'Want-to-reduce-your1' style={{paddingRight:'30px'}}>Looking for best option to
maximise your savings
and optimise your
expenses ? </span>
                  <div className = 'Rectangle-41' style = {{padding:"16px 45px 16px 36px",
                  display:'flex',marginTop:'16px',cursor:'pointer'}}
                   >
                    <span className = 'YES1' >YES</span><i style = {{ color:'white'}} className="fas fa-arrow-right"></i>
                  </div>
                </div>


           </div>
      <div style={{ marginLeft:'50px'}}>   
     <Card />
</div>
  

          </div>

          <div className='col-3' style={{marginTop:'30px'}}>
                <img style = {{height:'477px',width:'200px',paddingTop:'11px',marginTop:'18%',paddingTop: '89%'}} src='images/image-ad@3x.png'/>
                </div>
          </div>


       </div>
            
         </div>   
            

        
          
        );
      }

export default HomePage;


/*<div className='row' style={{backgroundColor: ' rgba(255, 255, 255, 0.56)'}} >
       <div className='col-12'> 
  <nav className="navbar">
      <div className='login1'>
    <span>OPTIMA</span><small style={{ marginLeft: '6px', paddingTop: '10px', fontSize: '16px' }}><i>Pay Less, Save More</i></small>
      </div>
      <div align="right">
        <div ><h2 className='login1' style={{ marginTop: '50px', marginRight: '80px', paddingTop: '20px', fontSize: '18px' }}>Welcome Prashanth </h2>
        <button className="btn btn-primary" style={{border: '10px' }}>Logout</button>
       </div>
       </div>
      </nav>
      </div>
    
      <div className="col-1 sidebar" style={{ marginTop: '4px', display: 'flex', flexDirection:'column', background:'white'}}>
      
      <div><img className='ic_home' style={{marginTop: '50px', cursor:'pointer',  marginLeft: '17px'}} src='images/ichome.png'/></div> 
      <div><img className='ic_home' style={{marginTop: '15px', cursor:'pointer', marginLeft: '17px'}} src='images/icwallet.png'/> </div>
      <div><img className='ic_home' style={{marginTop: '15px', cursor:'pointer',  marginLeft: '17px'}} src='images/icwallet.png'/></div> 
      
      </div>
      
      <div className='col-9'>
            <div className="title">
              <p className = 'My_financials'>My financials</p>
            </div>
      
      
      
      </div>

            <div className='col-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='cardbg' style={{ paddingTop: '49px', paddingLeft: '38px' }}>
                <div className='debit'>
                  <h2><b>Debitcard account</b></h2>
                </div><br/>
                <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src='images/img-card.png'/>natwest </div> <br/><br/>
                <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src='images/card_img2.jpg'/>RBS </div><br/><br/>
                <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src='images/img-card.png'/>barclays </div><br/><br/>
                </div>
            
           
         </div>
        
        </div>*/
