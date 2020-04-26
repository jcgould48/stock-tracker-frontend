import React from 'react'
import Button from './Button'
import Search from './Search';

const Sidebar = (
    {onDelete, 
    savedStocks,
handleSearchSubmit, 
handleToggle}) => {
  
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
                X
            </Button>
      </div>
    )
   })} 
  </div>
  <div class="pusher">
    <div class="ui basic segment">
    <div style= {{
marginTop:'100px',
display: 'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
}}>  
<Search 
handleSearchSubmit= {handleSearchSubmit} 
handleToggle ={handleToggle}
// searchTerm= {this.state.searchTerm}
/>
<hr style={{width: '75' , color: '#3b3b3b', margin : '50px 0'}}/>
</div>
    </div>
  </div>
  <button className='ui button' onClick = {this.handleToggle}>View Favorites
</button>
</div>
  )
}

export default Sidebar