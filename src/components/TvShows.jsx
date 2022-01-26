import React, { useState, useEffect } from "react";
import Card from "./Card";

function TvShows(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="trending--container">
      {data.map((movie) => {
        return <Card info={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default TvShows;
