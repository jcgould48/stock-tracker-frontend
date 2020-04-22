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
    // handleChange = (event) => {
    //     let updatedSearch = {...this.state.searchItem}
    //     updatedBlog[event.target.name] =event.target.value;
    //     this.setState({blog:updatedBlog}, () =>{
    //         console.log(updatedBlog);
    //     })
    // }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSearchSubmit(event, this.state.searchItem)
        // let emptyBlog = {title:'', author:'', subject:'', article:''}
        // this.setState({blog:emptyBlog});
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
        // onChange={this.handleChange} 
        type='text' 
        placeholder='Search By Stock Ticker...'
        value={this.state.searchTerm}
        />
         <div className="field">
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