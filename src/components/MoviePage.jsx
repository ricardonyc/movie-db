import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { RecommendationsContext } from "../App";
import Recommendations from "./Recommendations";
import BigCard from "./BigCard";
import Aos from "aos";
import "aos/dist/aos.css";
import CastCards from "./CastCards";

function MoviePage(props) {
  const { recommendations, media, setRecommendations, cast, setCast } =
    useContext(RecommendationsContext);

  const { id, media_type } = media;
  const [visible, setVisible] = useState(5);

  const showMoreItems = () => {
    setVisible((prev) => prev + 5);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchMovieRecommendations = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    setRecommendations(data.results);
  };

  const fetchTvRecommendations = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    setRecommendations(data.results);
  };

  const fetchCast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    setCast(data.cast);
  };

  // if media_type is undefined, its a movie
  useEffect(() => {
    if (media_type === undefined || media_type === "movie") {
      fetchMovieRecommendations();
      fetchCast();
    } else {
      fetchTvRecommendations();
    }
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500, once: true, delay: 20 });
  }, []);

  return (
    <div className="moviepage--container">
      <BigCard movieId={id} mediaInfo={media} />

      <h3 className="cast--h3">Cast</h3>
      <div className="cast--cards__container">
        {cast.slice(0, visible).map((person) => (
          <CastCards key={person.cast_id} person={person} />
        ))}
      </div>
      {visible < recommendations.length ? (
        <button onClick={showMoreItems}>More Cast</button>
      ) : null}

      <Recommendations recommendations={recommendations} />
    </div>
  );
}

export default MoviePage;
