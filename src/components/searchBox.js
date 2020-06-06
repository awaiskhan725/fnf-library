import React from "react";

const searchBox = ({ searchChange }) => {
  return (
    <div className="text-center m-3">
      <input
        className="search-box"
        type="text"
        name="search"
        id="search"
        placeholder="Search friends and family"
        onChange={searchChange}
      />
    </div>
  );
};

export default searchBox;
