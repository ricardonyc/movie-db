import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import CircularProgress from "@mui/material/CircularProgress";

function TvShows(props) {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tvRecommendations, setTvRecommendations] = useState([]);

  const fetchTrending = async () => {
    // setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );

    setTvShows(data.results);
    // setLoading(false);
  };

  // console.log(tvShows)

  // const fetchTrending = async () => {
  //   // setLoading(true);
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   );

  //   setTvShows(data.results);
  //   // setLoading(false);
  // };

  useEffect(() => {
    // fetchTrending();
    const timer = setTimeout(() => {
      setLoading(false);
      fetchTrending();
    }, 700);
  }, []);

  const spinnerStyling = {
    width: "4rem",
    height: "4rem",
    color: "#62ee81",
  };

  return (
    <div className="card--container">
      <h2 className="top--h2">Hottest TV Shows Today</h2>
      <div className="card--section">
        {loading ? (
          <CircularProgress className="spinner" style={spinnerStyling} />
        ) : (
          tvShows.map((movie) => {
            return (
              <Card info={movie} key={movie.id} setMedia={props.setMedia} />
            );
          })
        )}
      </div>
    </div>
  );
}

export default TvShows;
