import React, {Component} from 'react';


class StockInfo extends Component {
  
    render()
   { 
    console.log('StockInfo...',  this.props.stocks)
    return(   
        <div>
            <h1>{this.props.stocks.symbol}</h1>
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