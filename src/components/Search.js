import React, {Component} from 'react';
import Button from './Button';
import './App.css'
import PropTypes from 'prop-types';

class Search extends Component{
    constructor(){
        super()
        this.state = {
            searchItem: '',
        }
           
    }
    handleChange = (event) => {
        
        this.setState({searchItem:event.target.value}, () =>{
            console.log('updatedsearch...', this.state.searchItem);
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSearchSubmit(event, this.state.searchItem)
        this.setState({searchItem:''});
        event.target.reset();
    }

    
    render() {
        return(
        <div>
            <div className='searchCard'>
    <h3 style={{color:'#666666'}}>Search Stocks</h3>
    
<form onSubmit={this.handleSubmit} className='ui form'>
    <div className='field'>
        <div className='field ui icon input'>
        <input 
        onChange={this.handleChange} 
        type='text' 
        placeholder='Search By Stock Ticker...'
        value={this.state.searchTerm}
        />
         <i aria-hidden="true" class="search icon"></i>
         </div>
         <div className="field">
           <div className='mybtn'>
            <Button type='submit' className="btn btn-outline-dark">
                Search
            </Button>
            </div>  
        </div>
    </div>
</form>
</div>
        </div>
        );
    }
}


Search.propTypes = {
    handleSearchSubmitChange: PropTypes.func,
    handleChange:PropTypes.func,
    handleSubmit: PropTypes.func,
    searchTerm: PropTypes.string,
    }

export default Search;