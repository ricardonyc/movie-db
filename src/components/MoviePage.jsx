import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPoo } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import Genres from "../Genres";
import axios from "axios";
import MoviePageCard from "./MoviePageCard";
import { PinDropSharp } from "@mui/icons-material";

function MoviePage(props) {
  // const [tvRecommendations, setTvRecommendations] = useState([]);
  const [visible, setVisible] = useState(5);
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
    release_date,
  } = props.media;

  const fetchMovieRecommendations = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    // console.log(data);
    props.setRecommendations(data.results);
  };

  // calls for movie recommendations
  useEffect(() => {
    if (media_type === undefined) {
      fetchMovieRecommendations();
    }
  }, []);

  const fetchTvRecommendations = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${movie_id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    console.log(data.results);
    props.setRecommendations(data.results);
  };

  // calls for tv show recommendations
  useEffect(() => {
    if (media_type === "tv") {
      fetchTvRecommendations();
    }
  }, []);

  console.log(props.cast);

  const genresList = [];
  if (genre_ids) {
    for (let i = 0; i < genres.length; i++) {
      for (let j = 0; j < genre_ids.length; j++) {
        if (genres[i].id === genre_ids[j]) {
          // console.log(genres[i].name);
          genresList.push(genres[i].name);
        }
      }
    }
  }

  // visible === props.recommendations.length : hide button
  // console.log(props.recommendations);

  const showMoreItems = () => {
    setVisible((prev) => prev + 5);
  };

  // console.log(genresList);
  // console.log(props.recommendations);

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className="moviepage--container">
      <div className="moviepage--section">
        <img src={imgUrl} alt="" />
        <div className="movie--info">
          <h1 className="title">
            {title ? title : name} ({media_type ? "TV" : "Movie"}){" "}
          </h1>
          <p className="overview">{overview}</p>
          <div className="genres--container">
            {genresList.map((item) => {
              return <p className="genre--name">{item}</p>;
            })}
          </div>
          <p className="release--date">
            {first_air_date ? first_air_date : release_date}
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

      <div className="cast--container"></div>

      <div className="recommendations--section">
        <h2>Recommended</h2>
        <div className="recommendation--cards">
          {/* if NO recommendations, returns SVG */}
          {props.recommendations.length > 0 ? (
            props.recommendations.slice(0, visible).map((movie) => {
              return <MoviePageCard key={movie.id} info={movie} />;
            })
          ) : (
            <img
              src="https://i.pinimg.com/originals/26/da/36/26da36fa5b621bd90b0a7ec755833ea9.png"
              alt=""
            />
          )}
        </div>

        {visible < props.recommendations.length ? (
          <button onClick={showMoreItems}>More</button>
        ) : null}
      </div>
    </div>
  );
}

export default MoviePage;
