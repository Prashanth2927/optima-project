import React from 'react';
import './demo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Paper} from 'paper-react';
import { Card } from '@material-ui/core';


const Demo=()=>{
    return(
<React.Fragment>
    <div className="row">
        <div className='col-6' style={{ backgroundColor:'white', boxShadow:'1px 1px 5px 5px red', marginLeft:'25px', marginTop:'25px' }}>
<div className='JP_Morgan_Chase' style={{whiteSpace: 'nowrap' , marginTop:'10px'}}>Debit accounts</div>

<div className='tooltip_background'>
<div className='row'>
<div className='col-3' style={{whiteSpace: 'nowrap', paddingTop:'10px',paddingLeft:'12px'}}>
   <img style={{width:'75px',marginLeft:'10px'}} src={'../../../../images/cards/Credit/Barclays@2x.png'}/>
</div>

<div className='col-4' style={{paddingTop:'10px',paddingLeft:'12px'}}>
   <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='JP_Morgan_Chase'>Halifax</div>
           <div className='JP_Morgan_Chase'>0.2% AER</div>
       </div>
   </div>
</div>
<div className='col-2' style={{paddingTop:'10px',paddingLeft:'12px',paddingRight:'22px'}}>
   <div style={{display:'flex',flexDirection:'row'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='JP_Morgan_Chase'>SB </div>
           <div className='JP_Morgan_Chase'>£ 200</div>
         
           </div>
   </div>
</div>
</div>
</div>

<div className='tooltip_background'>
<div className='row'>
<div className='col-3' style={{whiteSpace: 'nowrap', paddingTop:'10px',paddingLeft:'12px'}}>
   <img style={{width:'75px',marginLeft:'10px'}} src={'../../../../images/cards/Credit/Barclays@2x.png'}/>
</div>

<div className='col-4' style={{paddingTop:'10px',paddingLeft:'12px'}}>
   <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='JP_Morgan_Chase'>Halifax</div>
           <div className='JP_Morgan_Chase'>0.2% AER</div>
       </div>
   </div>
</div>
<div className='col-2' style={{paddingTop:'10px',paddingLeft:'12px',paddingRight:'22px'}}>
   <div style={{display:'flex',flexDirection:'row'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='JP_Morgan_Chase'>SB </div>
           <div className='JP_Morgan_Chase'>£ 200</div>
         
           </div>
   </div>
</div>
</div>
</div>


<div className='tooltip_background'>
<div className='row'>
<div className='col-3' style={{whiteSpace: 'nowrap', paddingTop:'10px',paddingLeft:'12px'}}>
   <img style={{width:'75px',marginLeft:'10px'}} src={'../../../../images/cards/Credit/Barclays@2x.png'}/>
</div>

<div className='col-4' style={{paddingTop:'10px',paddingLeft:'12px'}}>
   <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='JP_Morgan_Chase'>Halifax</div>
           <div className='JP_Morgan_Chase'>0.2% AER</div>
       </div>
   </div>
</div>
<div className='col-2' style={{paddingTop:'10px',paddingLeft:'12px',paddingRight:'22px'}}>
   <div style={{display:'flex',flexDirection:'row'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='JP_Morgan_Chase'>SB </div>
           <div className='JP_Morgan_Chase'>£ 200</div>
         
           </div>
   </div>
</div>
</div>
</div>


</div>




<div className='col-5' style={{ boxShadow:'1px 1px 5px 5px grey', paddingRight:'250px', marginLeft:'25px', marginTop:'25px' }}>
<div className='Debit_accounts'>Credit accounts</div>

<div className='tooltip_background'>
<div className='row'>
<div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
   <img style={{width:'175px',marginLeft:'22px'}} src={'../../../../images/cards/Credit/Barclays@2x.png'}/>
</div>
<div className='col-4' style={{paddingTop:'20px',paddingLeft:'55px'}}>
   <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='bank'><small>Banks</small></div>
           <div className='JP_Morgan_Chase'>Halifax</div>
           <div className='bank' style={{marginTop:'15px'}}><small>Remaining Full Term</small></div>
           <div className='JP_Morgan_Chase'>123</div>
       </div>
   </div>
</div>
<div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px',paddingRight:'22px'}}>
   <div style={{display:'flex',flexDirection:'row'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='bank'>Principal Due</div>
           <div className='JP_Morgan_Chase'>£ 200</div>
           <div className='bank' style={{marginTop:'15px'}}>Due date</div>
           <div className='JP_Morgan_Chase' style={{color:'#ff5d64'}}>{new Date(new Date().setDate(new Date().getDate()+5)).toDateString()}</div>
       </div>
   </div>
</div>
</div>
</div>

<div className='tooltip_background'>
<div className='row'>
<div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
   <img style={{height:'110px',width:'175px',marginLeft:'22px'}} src={'../../../../images/cards/Credit/Barclays@2x.png'}/>
</div>
<div className='col-4' style={{paddingTop:'20px',paddingLeft:'55px'}}>
   <div style={{display:'flex',flexDirection:'row',marginRight:'22px'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='bank'><small>Banks</small></div>
           <div className='JP_Morgan_Chase'>Halifax</div>
           <div className='bank' style={{marginTop:'15px'}}><small>Remaining Full Term</small></div>
           <div className='JP_Morgan_Chase'>123</div>
       </div>
   </div>
</div>
<div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px',paddingRight:'22px'}}>
   <div style={{display:'flex',flexDirection:'row'}}>
       <div style={{display:'flex',flexDirection:'column'}}>
           <div className='bank'>Principal Due</div>
           <div className='JP_Morgan_Chase'>£ 200</div>
           <div className='bank' style={{marginTop:'15px'}}>Due date</div>
           <div className='JP_Morgan_Chase' style={{color:'#ff5d64'}}>{new Date(new Date().setDate(new Date().getDate()+5)).toDateString()}</div>
       </div>
   </div>
</div>
</div>
</div>



</div>


</div>
</React.Fragment>


    );
}
export default Demo;
