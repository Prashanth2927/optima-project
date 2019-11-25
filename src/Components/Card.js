import React,{Component} from 'react'
import imagead from '../images/image-ad@3x.png'
import card1 from '../images/cards/Credit/Barclays.png'
import card2 from '../images/cards/Credit/RBS.png'
import card3 from '../images/cards/Credit/NatWest.png'
import card4 from '../images/cards/debit/Barclays.png'
import card5 from '../images/cards/debit/HSBC.png'
import card6 from '../images/cards/debit/Halifax.png'
class Card extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row" >
    <div className="col-6" style={{marginTop:'20px', display: 'flex', flex:'1'}}>
        <div className="card text-center">
        <div className="overflow" >
        <div style={{textAlign:'left', marginLeft:'10px'}}><h5><b>Debit accounts</b></h5></div>
         </div>
         <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src={card6}/>&nbsp;&nbsp;&nbsp;Halifax &nbsp; &nbsp; &nbsp; <b>SB</b> &nbsp;  |  &nbsp; &euro;2500</div> <br/>
         <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src={card5}/>&nbsp;&nbsp;&nbsp;HSBC &nbsp; &nbsp; &nbsp; <b>PCA</b> &nbsp;  |  &nbsp; &euro;2500 </div><br/>
         <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src={card4}/>&nbsp;&nbsp;&nbsp;Barclays &nbsp; &nbsp; <b>SB</b> &nbsp;  |  &nbsp; &euro;2500  </div><br/><br/>
         <br />
         <br />   
      
         </div>
        </div> 
    <div className="col-6" style={{marginTop:'20px'}}>
        <div className="card text-center">
        <div className="overflow" > 
            <div style={{textAlign:'left', marginLeft:'10px'}}><h5><b>Credit accounts</b></h5></div>
         </div>
         <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src={card3}/>&nbsp;&nbsp;&nbsp;NatWest &nbsp; &nbsp; &nbsp; <b>CC</b> &nbsp;  |  &nbsp; &euro;1800</div> <br/>
         <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src={card2}/>&nbsp;&nbsp;&nbsp;RBS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <b>CC</b> &nbsp;  |  &nbsp; &euro;1200 </div><br/>
         <div><img className='ic_home' style={{cursor:'pointer', width:'25%', height:'20%'}} src={card1}/>&nbsp;&nbsp;&nbsp;Barclays &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>M</b>&nbsp; | &nbsp; &nbsp; &euro;800  </div><br/><br/>
         <div className = 'Rectangle-41' style = {{padding:"16px 45px 26px 36px",alignSelf:'center',display:'flex',cursor:'pointer'}}>
            <span className = 'YES1' >OPTIMIZE</span><i style = {{ color:'white', textAlign:'right'}} className="fas fa-arrow-right"></i>
          </div>
         </div>
        </div>
      
        </div>
        </div>
        )
    }
}
export default Card;