import React from "react";

function Search(props) {
  return (
    <div className="search--container">
    <label htmlFor="">Search</label>
      <input type="text" className="search--input" />
      {/* Call api as soon as user starts typing ??? */}
    </div>
  );
}

export default Search;
