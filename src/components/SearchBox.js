import React from "react";
import { Link } from "@reach/router";

const SearchBox = (props) => {
  return (
    <div className="search-container ">
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
      <form className="search">
        <label>
          Select a Block:
          <br></br>
          <select name="block" id="block" onChange={props.handleOnChange}>
            <option value="all">All Blocks</option>
            <option value="fun">Fundamentals</option>
            <option value="be">Backend</option>
            <option value="fe">Frontend</option>
            <option value="proj">Project</option>
            <option value="grad">Graduated</option>
          </select>
        </label>
      </form>
      <Link to="/students/add_student">
        <button className="addStudent">Add Student</button>
      </Link>
    </div>
  );
};

export default SearchBox;
