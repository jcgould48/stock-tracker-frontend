import React, {Component} from 'react';


class BusinessNews extends Component {
  
    render()
   { 
    console.log('BusinessNews',  this.props.news)
    return(   
        <div>

   {this.props.news.map((item) => {
    return (
        <div 
        className= 'ui card'
        style={{width: '75%', padding:'20px'}}
   >
       <div className='content'>
           <div className='header'>{item.title}</div>
           <div className='header'>{item.source.name}</div>
           
           <br />
           <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
           <div className='meta'>Author: {item.author}</div>
           </span>
           <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
           <div className='meta'>Description: {item.description}</div>
           </span>
           <hr />
    </div>
    </div>
    )
   })} 
</div>
)};
}

export default BusinessNews;