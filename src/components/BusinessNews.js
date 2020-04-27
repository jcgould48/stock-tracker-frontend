import React, {Component} from 'react';
import PropTypes from 'prop-types';


class BusinessNews extends Component {
  
    render()
   { 
    // console.log('BusinessNews',  this.props.news)
    return(   
        <div>
        <h2 style={{color:'#666666'}}>Recent News</h2>
   {this.props.news.map((item) => {
    return (
        <div className= 'ui card' style={{width: '100%'}}>
       <div className='content'>
           <div className='header'>{item.headline}</div>
           <br />
           <span style={{fontWeight:'bold' , color:'3b3b3b'}}>
           <a href={item.url} className='meta'>Source: {item.source}</a>
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
BusinessNews.propTypes = {
        news: PropTypes.arrayOf(
        PropTypes.shape({
            headline: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
        })
        )
};

export default BusinessNews;