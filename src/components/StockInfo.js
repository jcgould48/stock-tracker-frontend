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
          <a className="header">{this.props.stocks.symbol}</a>
          <div className="meta">{this.props.stocks.companyName}</div>
      <div className="description">
      {this.props.stocks.primaryExchange}

    <div>{this.props.stocks.latestPrice}</div>
    <div>{this.props.stocks.change}</div>
      </div>
      </div>
      </div>
      <form onSubmit={this.handleSave}>
        {/* <input 
        // onChange={this.handleChange} 
        type='hidden'
        name='companyName' 
        placeholder='Search By Stock Ticker...'
        value={this.props.stocks.companyName}
        />
        <input 
        // onChange={this.handleChange} 
        type='hidden'
        name='symbol' 
        value={this.props.stocks.symbol}
        /> */}

            <Button type='submit' className='ui green button' >
                Add To Watch List
            </Button>
</form>
</div>
)};
}

export default StockInfo;