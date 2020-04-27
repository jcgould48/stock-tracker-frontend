
import React, {Component} from 'react'
import Button from './Button'
import Search from './Search';

class Sidebar extends Component{
    
  render(){
      return (
      <div>       
    <div class="ui segment pushable">      
  <div class="ui sidebar inverted visible vertical right menu">
  {this.props.savedStocks.map((item) => {
    return (
        <div>
        <a class="item">
        {item.symbol}
      </a>  
      <Button type='submit' className='ui mini red button' onClick={() =>{
                return this.props.onDelete(item._id)
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
handleSearchSubmit= {this.props.handleSearchSubmit} 
// handleToggle ={handleToggle}
// searchTerm= {this.state.searchTerm}
/>
{/* <div class="ui checkbox">
  <input type="checkbox" name="toggle" onChange = {this.handleToggle}/>
  <label>View Favorites</label>
</div> */}
<hr style={{width: '75' , color: '#3b3b3b', margin : '50px 0'}}/>
</div>
    </div>
  </div>
</div>

</div>
  )
}
}
export default Sidebar
