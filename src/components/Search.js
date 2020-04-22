import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Button from './Button';

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
        <div style={{margin:'40px', width: '300px'}}>
            <div>
    <h1>Search Stocks</h1>
<form onSubmit={this.handleSubmit} className='ui form'>
    <div className='field'>
        <input 
        onChange={this.handleChange} 
        type='text' 
        placeholder='Search By Stock Ticker...'
        value={this.state.searchTerm}
        />
         <div className="field">
             <br></br>
            <Button type='submit' className='ui button'>
                Submit
            </Button>
        </div>
    </div>
</form>
</div>
        </div>
        );
    }
}


// Search.propTypes = {
//     handleChange: PropTypes.func,
//     searchTerm: PropTypes.string,
//     }

export default Search;