import React from "react";
import { Link } from "@reach/router";

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
    </div>
  );
};

export default SearchBox;
