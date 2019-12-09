import React,{Component} from 'react'
import imagead from '../images/image-ad@3x.png'


class Demo extends Component{
   
   constructor(){
       super();
       this.state={
           DebitCards:[
            {
                image:'Halifax.png', 
                name:'Halifax', 
                tag:'0.2% AER', 
                tag2:'SB',  
                balance:'$2500'
            },
            {
                image:'HSBC.png', 
                name:'HSBC', 
                tag:'0.1% AER', 
                tag2:'PCA',  
                balance:'$2222'
            },
            {
                image:'Barclays.png', 
                name:'Barclays', 
                tag:'0.33% AER', 
                tag2:'SB',  
                balance:'$4414'
            },
                  
                  
        ],
        CreditCards:[
            {
                image:'NatWest.png' ,
                name:'NatWest', 
                tag:'0.2% AER', 
                tag2:'CC',
                balance:'$2500'
            },
            {
                image:'RBS.png' ,
                name:'RBS', 
                tag:'0.1% AER', 
                tag2:'CC', 
                balance:'$2222'
            },
            {
                image:'Barclays.png' ,
                name:'Barclays', 
                tag:'0.33% AER', 
                tag2:'M', 
                balance:'$4414'},
                  
        ]
       }
       
    }

DebitcardArray(){
    
    return this.state.DebitCards.map((card,index)=>{
       
       const {image, name, tag, tag2, tag3, balance}=card
return (
  <div>
     
     <div key={index}>
     <div className='row' >
           
    <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
<img style={{cursor:'pointer', width:'84px', height:'52px'}} src={'images/cards/debit/'+image} />
    </div>
    <div className='col-2' style={{paddingTop:'30px', paddingLeft:'0px'}}>
     <p>{name}<small>{tag}</small></p>
     </div>
     <div className='col-3' style={{paddingTop:'30px', paddingLeft:'110px'}}>
{tag2}
     </div>
  <div className='col-1' style={{paddingTop:'30px',paddingLeft:'22px'}}>
  {tag3}  
  </div>
     <div className='col-1' style={{paddingTop:'30px', paddingLeft:'0px'}}>
{balance}
     </div>


    </div>
    
     </div>

  </div>
)
    })
}

CreditcardArray(){
    
    return this.state.CreditCards.map((card,index)=>{
       
       const {image, name, tag, tag2, tag3, balance}=card
return (
  <div>
     
     <div key={index}>
     <div className='row' >
           
    <div className='col-4' style={{paddingTop:'30px',paddingLeft:'22px'}}>
<img style={{cursor:'pointer', width:'84px', height:'52px'}} src={'images/cards/Credit/'+image} />
    </div>
    <div className='col-2' style={{paddingTop:'30px', paddingLeft:'0px'}}>
     <p>{name}<small>{tag}</small></p>
     </div>
     <div className='col-3' style={{paddingTop:'30px', paddingLeft:'110px'}}>
{tag2}
     </div>
  <div className='col-1' style={{paddingTop:'30px',paddingLeft:'22px'}}>
  {tag3}  
  </div>
     <div className='col-1' style={{paddingTop:'30px', paddingLeft:'0px'}}>
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
           <div className='row' style={{marginTop:'22px'}}>
           <div className='col-5' style={{boxShadow:'1px 1px 5px 1px grey', paddingBottom:'162px', paddingRight:'66px'}} >
           <tr > <td style={{padding:'8px', paddingTop:'10px'}}>Debit accounts</td> </tr>
           <tr>
           <td>{this.DebitcardArray()}</td>
         </tr>
         </div>
         <div className='col-5' style={{boxShadow:'1px 1px 5px 1px grey', paddingBottom:'162px', paddingRight:'66px', marginLeft:'18px'}} >
           <tr>
           <td>{this.CreditcardArray()}</td>
         </tr>
         </div>
</div>
          </div>
          </div>
       
           
        


    )
    }
}

export default Demo;



    