import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function Search(props) {
  return (
    <div className="search--container">
      <div className="input--container">
        <BiSearchAlt2 className="search--icon" />
        <input type="text" className="search--bar" />
      </div>

      {/* Call api as soon as user starts typing ??? */}
    </div>
  );
}

export default Search;
