import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPoo } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { BsFillEmojiNeutralFill } from "react-icons/bs";
import Genres from "../Genres";
import axios from "axios";

function MoviePage(props) {
  // const [tvRecommendations, setTvRecommendations] = useState([]);
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

  // console.log(media_type);
  // const loadLate = () => {
  //   if (media_type === undefined) {
  //     console.log("movie");
  //   } else if (media_type === "tv") {
  //     console.log("tv");
  //   }
  // };

  console.log(movie_id)
  
  // if (media_type === undefined) {
  //   console.log("movie")
  //   const fetchTrending = async () => {
  //     const { data } = await axios.get(
  //       `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=83bc98823c4c710c5443011ef8e9dbf9&language=en-US&page=1`
  //     );
  //     // console.log(data);
  //     setRecommendations(data.results);
  //   };
  //   // fetchTrending()
  // } else if (media_type === "tv") {
  //   console.log("tv");
  // }

  // console.log(media_type === 'tv' ? 'its a tv' : null)

  // const fetchTvRecommendations = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=83bc98823c4c710c5443011ef8e9dbf9&language=en-US&page=1`
  //   );
  //   console.log(data);
  //   setTvRecommendations(data.results);
  // };

  // // fetchTvRecommendations()

  // useEffect(() => {
  //   fetchTvRecommendations()
  // }, [])

  // console.log(tvRecommendations)

  // console.log(recommendations)

  // const loadLate = async () => {
  //   console.log("loaded");
  // };

  // loadLate();

  // console.log(genre_ids)

  // let foundGenres = [];
  // console.log(genre_ids ? genre_ids.length : null)

  // for (let i = 0; i < genres.length; i++) {
  //   for (let j = 0; j < genre_ids.length; j++) {
  //     if (genres[i].id === genre_ids[j]) {
  //       foundGenres.push(genres[i].name);
  //       // console.log(genres[i].name)
  //     }
  //   }
  // }
  // console.log(foundGenres)

  // console.log(genres)

  // const [recommendations, setRecommendations] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setRecommendations(data.results));
  //   }, []);

  // console.log(recommendations);

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className="moviepage--container">
      <div className="moviepage--section">
        <img src={imgUrl} alt="" />
        <div className="movie--info">
          <h1 className="title">{title ? title : name}</h1>
          <p className="overview">{overview}</p>
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
      {/* {recommendations.map(item => {
          return <Card info={recommendations} />
      })} */}
    </div>
  );
}

export default MoviePage;

// FaPoo
{
  /* <FaPoo className="poo" /> */
}
