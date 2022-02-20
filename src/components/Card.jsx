import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RecommendationsContext } from "../App";

function Card({ info }) {
  const { setMedia } = useContext(RecommendationsContext);

  const {
    title,
    name,
    overview,
    poster_path,
    vote_average,
    vote_count,
    release_date,
    id,
    genre_ids,
    media_type,
    first_air_date,
  } = info;

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  const ratingColor = {
    backgroundColor:
      vote_average >= 8 ? "#62ee81" : vote_average >= 7 ? "#FFA212" : "#FF2222",
  };

  return (
    <Link
      to={`${id}`}
      className="link"
      onClick={() =>
        setMedia({
          id,
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
        {poster_path ? (
          <img src={imgUrl} alt="" />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
            alt="NOT FOUND"
          />
        )}
        <p className="rating" style={ratingColor}>
          {vote_average}
        </p>
        <div className="text--container">
          <h2>{title ? title : name}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
