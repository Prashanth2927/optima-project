import React,{Component} from 'react'
import imagead from '../images/image-ad@3x.png'
import card1 from '../images/cards/Credit/Barclays.png'
import card2 from '../images/cards/Credit/RBS.png'
import card3 from '../images/cards/Credit/NatWest.png'
import card4 from '../images/cards/debit/Barclays.png'
import card5 from '../images/cards/debit/HSBC.png'
import card6 from '../images/cards/debit/Halifax.png'

class Demo extends Component{
   
   constructor(){
       super();
       this.state={
           DebitCards:[
            {image:'Halifax.png' ,name:'Halifax', tag:'0.2% AER', tag2:'SB', balance:'$2500'},
            {image:'HSBC.png' ,name:'HSBC', tag:'0.1% AER', tag2:'PCA', balance:'$2222'},
            {image:'Barclays.png' ,name:'Barclays', tag:'0.33% AER', tag2:'SB', balance:'$4414'},
                  
                  
        ]
       }
       
    }

cardArray(){
    
    return this.state.DebitCards.map((card,index)=>{
       
       const {image, name, tag, tag2, balance}=card
return (
  <div>
     
     <div key={index}>
     <div className='row'>
           
    <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
<img style={{cursor:'pointer', width:'90px', height:'40px'}} src={'images/cards/debit/'+image} />
    </div>
 <div className='col-4' style={{paddingTop:'30px', paddingLeft:'22px'}}>
     <p>{name}<small>{tag}</small></p>
     </div>
     <div className='col-2' style={{paddingTop:'30px', paddingRight:'22px'}}>
{tag2}
     </div>
   
     <div className='col-2' style={{paddingTop:'30px', paddingRight:'22px', boxShadow:'5px 1 px grey'}}>
{balance}
     </div>


    </div>
    
     </div>

  </div>
)
    })
}



    render(){
       
        return(
       <div>
           <div className='DebitAccounts container-fluid d-flex justify-content-center' >
           <tr>
           <td>{this.cardArray()}</td>
         </tr>
          </div>
       
           </div>
        


    )
    }
}

export default Demo;



    