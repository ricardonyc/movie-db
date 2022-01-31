import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPoo } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import Genres from "../Genres";
import axios from "axios";
import Card from "./Card";

function MoviePage(props) {
  const [tvRecommendations, setTvRecommendations] = useState([]);
  const { id } = useParams();
  const { genres } = Genres;
  const {
    movie_id,
    title,
    name,
    overview,
    poster_path,
    vote_average,
    vote_count,
    genre_ids,
    first_air_date,
    media_type,
  } = props.media;



  // const fetchTvRecommendations = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=83bc98823c4c710c5443011ef8e9dbf9&language=en-US&page=1`
  //   );
  //   console.log(data);
  //   props.setRecommendations(data.results);
  // };

  // // fetchTvRecommendations()
  // useEffect(() => {
  //   fetchTvRecommendations();
  // }, []);


  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className="moviepage--container">
      <div className="moviepage--section">
        <img src={imgUrl} alt="" />
        <div className="movie--info">
          <h1 className="title">{title ? title : name}</h1>
          <p className="overview">{overview}</p>
          <p className="release--date">
            {first_air_date ? first_air_date : null}
          </p>
          <div className="rating--section">
            {vote_average >= 9 ? (
              <p className="recommended">Recommended |</p>
            ) : vote_average >= 8 ? (
              <AiFillFire className="fire" />
            ) : vote_average >= 7 ? (
              <BsFillEmojiNeutralFill className="neutral" />
            ) : (
              <FaPoo className="poo" />
            )}
            {vote_average ? vote_average : null}
          </div>
          <p>{movie_id ? movie_id : null}</p>
        </div>
      </div>
      {/* <div className="recommendations--container">
        {props.recommendations.map((item) => {
          return <Card info={item} key={item.id} />;
        })}
      </div> */}
    </div>
  );
}

export default MoviePage;
