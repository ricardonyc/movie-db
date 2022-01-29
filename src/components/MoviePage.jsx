import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

function MoviePage(props) {
  const { id } = useParams();
  const {
    movie_id,
    title,
    name,
    overview,
    poster_path,
    vote_average,
    vote_count,
  } = props.trending;

  const [recommendations, setRecommendations] = useState([])

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
          <h1>{title ? title : name}</h1>
          <h2>{overview}</h2>
          <p>{vote_average ? vote_average : null}</p>
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
