import React from 'react'
import Button from './Button'

const Sidebar = (
    {onDelete, 
    savedStocks}) => {
  
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
      <h3 class="ui header">Application Content</h3>
      <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" />
    </div>
  </div>
</div>
  )
}

export default Sidebar