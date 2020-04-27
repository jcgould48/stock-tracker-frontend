import React, {Component} from 'react';
import Button from './Button';

class StockInfo extends Component {
    constructor(){
        super()
        this.state = {
            stock:{
            companyName:'', 
            symbol:'',  
        }, 
           
        }
    }

    handleSave= (event) => {
        this.props.handleSaveSubmit(event)
        
    }

    render()
   { 
    // console.log('StockInfo...',  this.props.stocks)
    return(   
        <div>

<div className = 'ui card'>
      <div className="image">
        <img src='' alt="..."/>
      </div>
      <div className="content">
          <a className="header">{this.props.stocks.companyName}</a>
          <div className="meta">{this.props.stocks.primaryExchange}: {this.props.stocks.symbol}</div>
      <div className="description">
      {this.props.stocks.primaryExchange}

    <div>Latest Price: {this.props.stocks.latestPrice}</div>
    <div>{this.props.stocks.change}</div>
      </div>
      </div>
      </div>
      <form onSubmit={this.handleSave}>

            <Button type='submit' className="btn btn-outline-dark" >
                Add To Watch List
            </Button>
</form>
</div>
)};
}

export default StockInfo;