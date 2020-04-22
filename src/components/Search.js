import React from 'react';
import PropTypes from 'prop-types';


const Search = (props) => {
return (
<div>
    <h1>SearchComponent</h1>
<form className='ui form'>
    <div className='field'>
        <input 
        onChange={props.handleChange} 
        type='text' 
        placeholder='Search By Subject...'
        value={props.searchTerm}
        />
    </div>
</form>
</div>
)
}

Search.propTypes = {
    handleChange: PropTypes.func,
    searchTerm: PropTypes.string,
    }

export default Search;