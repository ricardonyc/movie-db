import React from "react";

function MoviePageCard(props) {
  const {
    // media_type,
    // original_title,
    // title,
    // overview,
    vote_average,
    poster_path,
    backdrop_path,
  } = props.info;

  const ratingColor = {
    backgroundColor:
      vote_average >= 8 ? "#62ee81" : vote_average >= 7 ? "#FFA212" : "#FF2222",
  };

  const imgUrl = `https://image.tmdb.org/t/p/original${
    poster_path ? poster_path : backdrop_path
  }`;

  return (
    <div data-aos="zoom-in" className="moviepage--card">
      {poster_path || backdrop_path ? (
        <img src={imgUrl} alt="" />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"
          alt="NOT FOUND"
        />
      )}
      <div className="card--text">
        <p className="rating" style={ratingColor}>
          {Math.round(vote_average * 10) / 10}
        </p>
      </div>
    </div>
  );
}

export default MoviePageCard;
