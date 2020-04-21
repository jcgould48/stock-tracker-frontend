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
        style={{width: '45%', padding:'20px'}}
   >
       <div className='content'>
           <div className='header'>{item.headline}</div>
           <br />
           <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
           <div className='meta'>Source: {item.source}</div>
           </span>
           <span style={{color:'3b3b3b'}}>
           <div className='description'>Summary: {item.summary}</div>
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