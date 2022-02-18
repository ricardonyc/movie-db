import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { RecommendationsContext } from "../App";
import Recommendations from "./Recommendations";
import BigCard from "./BigCard";

function MoviePage(props) {
  const { recommendations, media, setRecommendations } = useContext(
    RecommendationsContext
  );

  const { movie_id, media_type } = media;

  const fetchMovieRecommendations = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    setRecommendations(data.results);
  };

  const fetchTvRecommendations = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${movie_id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    setRecommendations(data.results);
  };

  // if media_type is undefined, its a movie
  useEffect(() => {
    if (media_type === undefined) {
      fetchMovieRecommendations();
    } else {
      fetchTvRecommendations();
    }
  }, []);

  return (
    <div className="moviepage--container">
      <BigCard mediaInfo={media} />
      <Recommendations recommendations={recommendations} />
    </div>
  );
}

export default MoviePage;
