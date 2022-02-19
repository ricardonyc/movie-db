import React, { useState, useEffect } from "react";
import Card from "../Card";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { FaSearch } from "react-icons/fa";

function Search(props) {
  const [search, setSearch] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearch = async () => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=83bc98823c4c710c5443011ef8e9dbf9&language=en-US&query=${search}&page=1&include_adult=false`
    );

    setTimeout(() => {
      setLoading(false);
      data.results.length > 0
        ? setResults(data.results)
        : console.log("NOTHING FOUND!");
      // setResults(data.results);
      // console.log(data.results)
    }, 700);
  };

  // console.log(results)

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const enterPress = (e) => {
    if (e.key === "Enter") {
      fetchSearch();
    }
  };

  const spinnerStyling = {
    width: "4rem",
    height: "4rem",
    color: "#F0DC4E",
  };

  return (
    <div className="card--container">
      <div className="searchbar--container">
        <input
          className="search--bar"
          type="text"
          onChange={searchHandler}
          onKeyPress={enterPress}
        />
        <FaSearch onClick={fetchSearch} className="search--icon" />
      </div>
      {/* <button onClick={fetchSearch}>Search</button> */}
      <h2 className="top--h2">Search</h2>
      <div className="card--section">
        {loading ? (
          <CircularProgress className="spinner" style={spinnerStyling} />
        ) : (
          results.map((result) => {
            return <Card info={result} />;
          })
        )}
      </div>
    </div>
  );
}

export default Search;
