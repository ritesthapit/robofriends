import React from 'react';

const SearchBox = ({searchChange}) => {
    // passed as searchChange property
    return(
        <div className ='pa2'>
            <input 
            className='pa3 ba b--blue bg-lightest-blue' 
            type='search' 
            placeholder='Search Robots'
            onChange={searchChange} 
            //onchange changes for the changed value that is entered in the input field
            />
        </div>
    );
}

export default SearchBox;