import React from "react";

function MoviePageCard(props) {
  const {
    media_type,
    original_title,
    title,
    overview,
    vote_average,
    poster_path,
    backdrop_path,
  } = props.info;

  //   console.log(props.info);

  // console.log(title)
  // console.log(overview)

  const imgUrl = `https://image.tmdb.org/t/p/original${
    poster_path ? poster_path : backdrop_path
  }`;

  return (
    <div className="moviepage--card">
      <img src={imgUrl} alt="" />
      <div className="card--text">
          {/* <h4>{title ? title : original_title}</h4> */}
      </div>
    </div>
  );
}

export default MoviePageCard;
