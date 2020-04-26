import React from 'react'
import Button from './Button'
import BusinessNews from './BusinessNews';
import StockInfo from './StockInfo';
import './App.css'

const Sidebar = (
    {onDelete, 
    savedStocks, handleSaveSubmit, news, stocks}) => {
  
  return (
    <div class="ui segment pushable">
  <div class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
  {savedStocks.map((item) => {
    return (
        <div>
        <a class="item">
        <i aria-hidden="true" class="home icon"></i>
        {item.symbol}
      </a>  
      <Button type='submit' className='ui small red button' onClick={() =>{
                return onDelete(item._id)
            }}
            >
                Delete
            </Button>
      </div>
    )
   })} 
  </div>
  <div class="pusher">
    <div class="ui basic segment">
    <div className='container'>
<div className='main'><BusinessNews 
news={news} /></div>

<div className='main'><StockInfo
handleSaveSubmit = {handleSaveSubmit}
stocks={stocks} />
</div>
</div>

    </div>
  </div>
</div>
  )
}

export default Sidebar