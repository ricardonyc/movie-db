import React, { useState, useEffect } from "react";
import Card from "./Card";
// import { FaChartLine } from "react-icons/fa";

function Trending(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&region=US
        `
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

export default Trending;
