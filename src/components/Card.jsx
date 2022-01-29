import React from "react";
// import { BrowserRouter as}
import { Link } from "react-router-dom";
import MoviePage from "./MoviePage";

function Card({ info }) {
  const {
    title,
    name,
    overview,
    poster_path,
    vote_average,
    vote_count,
    release_date,
    id,
  } = info;

  // console.log(info)

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  const ratingColor = {
    backgroundColor:
      vote_average >= 8 ? "#62ee81" : vote_average >= 7 ? "#FFA212" : "#FF2222",
  };

  // console.log(id);

  return (
    <Link to={`${id}`} className="link">
      <div className="movie--card">
        <img src={imgUrl} alt="" />
        <p className="rating" style={ratingColor}>
          {vote_average}
        </p>
        <div className="text--container">
          <h2>{title ? title : name}</h2>
          <p>{overview}</p>
        </div>
        {/* <MoviePage info={info} /> */}
      </div>
    </Link>
  );
}

export default Card;