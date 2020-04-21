import React, {Component} from 'react';


class StockInfo extends Component {
  
    render()
   { 
    console.log('StockInfo...',  this.props.stocks)
    return(   
        <div>

<div className = 'ui card'>
      <div className="image">
        <img src='' alt="..."/>
      </div>
      <div className="content">
          <a className="header">{this.props.stocks.symbol}</a>
          <div className="meta">{this.props.stocks.companyName}</div>
      <div className="description">
      {this.props.stocks.primaryExchange}

    <div>{this.props.stocks.iexRealtimePrice}</div>
      </div>
      </div>
      </div>
            <h1></h1>
            {/* <h1>{this.props.stocks['Meta Data']['Symbol']}</h1> */}
   {/* {this.props.stocks.map((item) => {
    return (
       
        <div><h1>
            {item['Meta Data']['Symbol']}
            </h1></div>

    )
   })}  */}
</div>
)};
}

export default StockInfo;