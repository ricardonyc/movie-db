import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

function Card({ info }) {
  const {
    title,
    name,
    overview,
    poster_path,
    vote_average,
    vote_count,
    release_date,
  } = info;

  console.log(info)

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  const ratingColor = {
    backgroundColor:
      vote_average >= 8 ? "#62ee81" : vote_average >= 7 ? "#FFA212" : "#FF2222",
  };

  // console.log(info)

  return (
    <div className="movie--card">
      <img src={imgUrl} alt="" />
      <p className="rating" style={ratingColor}>
        {vote_average}
      </p>
      <div className="text--container">
        <h2>{title ? title : name}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Card;
