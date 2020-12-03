import React from 'react';
import { Link } from '@reach/router';

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
      <Link to="/students">
        <button className="search" value="all" onClick={props.handleOnClick}>
          All Students
        </button>
      </Link>
      <input
        type="radio"
        value={true}
        name="graduation"
        onClick={props.handleOnClick}
      />
      Graduated
      <input
        type="radio"
        value={false}
        name="graduation"
        onClick={props.handleOnClick}
      />
      Current
      <Link to="/students/graduates">
        <button className="search">Graduated Students</button>
      </Link>
      <Link to="/students/current">
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
