import React, { useState, useEffect } from "react";
import GenreList from "./GenreList";
import Rating from "./Rating";
import Genres from "../Genres";
import axios from "axios";
import CastCards from "./CastCards";

function BigCard(props) {
  const { moviePoster, mediaInfo, movieId } = props;
  const { genres } = Genres;
  const [cast, setCast] = useState([]);

  const {
    title,
    name,
    overview,
    poster_path,
    vote_average,
    genre_ids,
    first_air_date,
    media_type,
    release_date,
  } = mediaInfo;

  const genresList = [];
  if (genre_ids) {
    for (let i = 0; i < genres.length; i++) {
      for (let j = 0; j < genre_ids.length; j++) {
        if (genres[i].id === genre_ids[j]) {
          genresList.push(genres[i].name);
        }
      }
    }
  }  


  let type_of_media;
  // checking media type
  if(media_type === undefined || media_type === 'movie'){
    type_of_media = 'Movie'
  } else  {
    type_of_media = 'TV'
  }

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div data-aos="slide-left" className="moviepage--section">
      <img src={imgUrl} alt="" />
      <div className="movie--info">
        <h1 className="title">
          {title ? title : name} ({type_of_media}){" "}
        </h1>
        <p className="overview">{overview}</p>

        <GenreList genreList={genresList} />

        <p className="release--date">
          {first_air_date ? first_air_date : release_date}
        </p>

        <Rating voteAverage={vote_average} />
      </div>
    </div>
  );
}

export default BigCard;
