import React, {Component} from 'react'
import Button from './Button'
import PropTypes from 'prop-types';

class Sidebar extends Component{
  render(){
      return (
      <div> 
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    {this.props.savedStocks.map((item) => {
    return (
        <div>
         <li className="nav-item active">
        <a className="nav-link" href="#">   
       
        <Button type='submit' className="btn btn-sm btn-outline-light" onClick={() =>{
                return this.props.handleRecallSubmit(item.symbol)
            }}
            >
            {item.symbol}
            </Button>
            
            <Button type='submit' className='btn btn-sm btn-outline-danger' onClick={() =>{
                return this.props.onDelete(item._id)
            }}
            >
                X
            </Button>
            <span className="sr-only">(current)</span>
      </a>  
    </li>
      </div>
    )
   })} 

    </ul>
  </div>
</nav>      
</div>
  )
}
}

Sidebar.propTypes = {
    handleRecallSubmit: PropTypes.func,
    onDelete: PropTypes.func,
    savedStocks: PropTypes.arrayOf(
    PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    })
    )
};
export default Sidebar
