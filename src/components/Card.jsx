import React from "react";
// import { BrowserRouter as}
import { Link } from "react-router-dom";
import MoviePage from "./MoviePage";

function Card({ info, setMedia }) {
  const {
    title,
    name,
    overview,
    poster_path,
    vote_average,
    vote_count,
    release_date,
    id: movie_id,
    genre_ids,
    media_type,
    first_air_date,
  } = info;

  // console.log(info);

  // console.log(info)
  // console.log(setTrending)
  // console.log(vote_average)

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  const ratingColor = {
    backgroundColor:
      vote_average >= 8 ? "#62ee81" : vote_average >= 7 ? "#FFA212" : "#FF2222",
  };

  // console.log(id);

  return (
    <Link
      to={`${movie_id}`}
      className="link"
      // using the setTrending function to set the new state of 'trending' in App.js
      // to pass data into MOVIEPAGE component
      onClick={() =>
        setMedia({
          movie_id,
          title,
          name,
          overview,
          poster_path,
          vote_count,
          vote_average,
          release_date,
          genre_ids,
          media_type,
          first_air_date,
        })
      }
    >
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
