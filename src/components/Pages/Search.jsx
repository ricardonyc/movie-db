import React, { useState, useEffect } from "react";
import Card from "../Card";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { FaSearch } from "react-icons/fa";
import img2 from "../../images/film-rolls.svg";

function Search(props) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const fetchSearch = async () => {
    setLoading(true);
    setIsEmpty(false);

    const { data } = await axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=83bc98823c4c710c5443011ef8e9dbf9&language=en-US&query=${search}&page=1&include_adult=false`
      )
      .catch((error) => {
        setLoading(false);
        setResults([]);
      });

    setTimeout(() => {
      setLoading(false);
      setResults(data.results);
      // setResults(data.results);
    }, 700);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const enterPress = (e) => {
    if (e.key === "Enter") {
      fetchSearch();
      setIsEmpty(false);
      setResults([]);
    }
  };

  const spinnerStyling = {
    width: "4rem",
    height: "4rem",
    color: "#F0DC4E",
  };

  return (
    <div className="card--container">
      <h2 className="top--h2">Search</h2>
      <div className="searchbar--container">
        <input
          className="search--bar"
          type="text"
          onChange={searchHandler}
          onKeyPress={enterPress}
          value={search}
          placeholder="Search Movies and TV Shows..."
        />
        <FaSearch onClick={fetchSearch} className="search--icon" />
      </div>
      <div className="card--section">
        {/* {!isEmpty ? (
          <img className="search--svg" src={img2} alt="" />
        ) : results.length < 1 ? (
          <h2 className="nothing--found">NOTHING FOUND</h2>
        ) : loading ? (
          <CircularProgress className="spinner" style={spinnerStyling} />
        ) : (
          results.map((result) => {
            return <Card key={result.id} info={result} />;
          })
        )} */}

        {isEmpty ? (
          <img className="search--svg" src={img2} alt="" />
        ) : loading ? (
          <CircularProgress className="spinner" style={spinnerStyling} />
        ) : results.length > 0 ? (
          results.map((result) => {
            return <Card key={result.id} info={result} />;
          })
        ) : (
          <h1 className="nothing--found">nothing found</h1>
        )}
      </div>
    </div>
  );
}

export default Search;
