import React, { useState, useEffect } from "react";
import Card from "../Card";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

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
      setResults(data.results);
    }, 700);
  };

  console.log(results);

  // useEffect(() => {
  //   fetchSearch();
  //   setLoading(false);
  // }, [search]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const spinnerStyling = {
    width: "4rem",
    height: "4rem",
    color: "#F0DC4E",
  };

  return (
    <div className="card--container">
      <input type="text" onChange={searchHandler} />
      <button onClick={fetchSearch}>Search</button>
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
