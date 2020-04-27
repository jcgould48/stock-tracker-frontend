import React, {Component} from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class StockInfo extends Component {
    constructor(){
        super()
        this.state = {
        //     stock:{
        //     companyName:'', 
        //     symbol:'',  
        // }, 
           
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
      <div style={{background:'lightGrey'}}>
        <i className='chart area icon'></i>
      </div>
      <div className="content">
          <a className="header">{this.props.stocks.companyName}</a>
          <div className="meta">{this.props.stocks.primaryExchange}: {this.props.stocks.symbol}</div>
          <hr></hr>
      <div className="description">
    <div><b>Latest Price: </b>{this.props.stocks.latestPrice} USD</div>
    {/* {this.props.stocks.change <0 ? <div style={{color:'red'}}><b>Change: </b>{this.props.stocks.change}</div>
   : <div style={{color:'green'}}>{this.props.stocks.change}</div> } */}
    <b>Current Price Change:</b> 
    <div style={{color: Math.sign(this.props.stocks.change)===-1 ? "red" : "green"}}> {this.props.stocks.change}</div>
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

StockInfo.propTypes = {
    handleSaveSubmit: PropTypes.func,
    stocks: PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        primaryExchange: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        latestPrice: PropTypes.string.isRequired,
        change: PropTypes.string.isRequired,
    })
};
export default StockInfo;