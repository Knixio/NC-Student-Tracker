import React from 'react';

const SearchBox = () => {
    return (
        <div className='search-container '>
            <form>
                <input className='search' type='search' 
                placeholder='Search...'>
                </input>
          </form>
        </div>
    )
}


export default SearchBox;