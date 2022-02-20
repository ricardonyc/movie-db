import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../Card";
import CircularProgress from "@mui/material/CircularProgress";

function NowPlaying(props) {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=83bc98823c4c710c5443011ef8e9dbf9&language=en-US&page=1`
    );

    setNowPlaying(data.results);
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
      <h2 className="top--h2">In Theaters Now</h2>

      <div className="card--section">
        {loading ? (
          <CircularProgress className="spinner" style={spinnerStyling} />
        ) : (
          nowPlaying.map((movie) => {
            return <Card info={movie} key={movie.id} />;
          })
        )}
      </div>
    </div>
  );
}

export default NowPlaying;
