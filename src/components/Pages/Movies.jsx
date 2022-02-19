import React, { useState, useEffect } from "react";
import Card from "../Card";
import axios from "axios";
// import Genres from "../../Genres";
import CircularProgress from "@mui/material/CircularProgress";

function Trending(props) {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { genres } = Genres;

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&region=US`
    );

    setTrending(data.results);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      fetchTrending();
    }, 700);
  }, []);

  const spinnerStyling = {
    width: "4rem",
    height: "4rem",
    color: "#F0DC4E",
  };

  return (
    <div className="card--container">
      <h2 className="top--h2">Trending Movies Today</h2>
      <div className="card--section">
        {loading ? (
          <CircularProgress className="spinner" style={spinnerStyling} />
        ) : (
          trending.map((movie) => {
            return <Card info={movie} key={movie.id} genre={movie.genre_ids} />;
          })
        )}
      </div>
    </div>
  );
}

export default Trending;
