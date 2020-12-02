import React from 'react';

const SearchBox = (props) => {
  const { onChange } = props;
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
      <div onChange={onChange}>
        <p>graduated?</p>
        <input type="radio" value="true" name="graduation" /> True
        <input type="radio" value="false" name="graduation" /> False
        {/* <input type="radio" value="Other" name="gender" /> Other */}
      </div>
    </div>
  );
};

export default SearchBox;
