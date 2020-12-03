import React from 'react';
import {Link} from '@reach/router'

const SearchBox = (props) => {
 
  return (
    <div className="search-container ">
      {/* <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleOnChange}
        ></input>
      </form> */}
      <Link to='/students'>
        <button className="search">All Students</button>
      </Link>
      <Link to='/students/graduates'>
        <button className="search">Graduated Students</button>
      </Link>
      <Link to='/students/current'>
        <button className="search">Current Students</button>
      </Link>
      
      {/* <div onChange={onChange}>
        <p>graduated?</p>
        <input type="radio" value="true" name="graduation" /> True
        <input type="radio" value="false" name="graduation" /> False
      </div> */}
    </div>
  );
};

export default SearchBox;
