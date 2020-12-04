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
        value={false}
        name="graduation"
        onClick={props.handleOnClick}
      />
      Current
      <input
        type="radio"
        value={true}
        name="graduation"
        onClick={props.handleOnClick}
      />
      Graduated
      <form>
        <select
          name="block"
          id="block"
          value=""
          onChange={props.handleOnChange}
        >
          <option value="all-blocks">All Blocks</option>
          <option value="proj">Project</option>
          <option value="be">Backend</option>
          <option value="grad">Graduated</option>
          <option value="fe">Frontend</option>
          <option value="fun">Fundamentals</option>
        </select>
      </form>
    </div>
  );
};

export default SearchBox;
