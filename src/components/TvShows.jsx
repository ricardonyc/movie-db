import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function TvShows(props) {
  const [tvShows, setTvShows] = useState([]);



  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );

    setTvShows(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="trending--container">
      <div className="trending--section">
        {tvShows.map((movie) => {
          return <Card info={movie} key={movie.id} setMedia={props.setMedia} />;
        })}
      </div>
    </div>
  );
}

export default TvShows;
 