import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";

function Search(props) {
  const [search, setSearch] = useState([]);
  const [result, setResult] = useState([]);

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${search}page=1&include_adult=false`
    );

    setResult(data.results);
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      // onSearch(search);
    }
  };

  console.log(`Search: ${search}`);
  console.log(`Result: ${result}`);

  return (
    <div className="search--container">
      <div className="input--container">
        <BiSearchAlt2 className="search--icon" />
        <input
          type="text"
          className="search--bar"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPress}
          placeholder="Search movies and tv shows"
          value={search}
        />
      </div>

      {/* Call api as soon as user starts typing ??? */}
    </div>
  );
}

export default Search;
