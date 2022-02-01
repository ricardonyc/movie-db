import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Genres from "../Genres";
import CircularProgress from "@mui/material/CircularProgress";

// import { FaChartLine } from "react-icons/fa";

function Trending(props) {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const { genres } = Genres;
  // const [genresList, setGenreList] = useState(genres)

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&region=US`
    );

    setTrending(data.results);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      fetchTrending();
    }, 700);
  }, []);

  // console.log(trending);

  // useEffect(() => {
  //   setGenreList(genres)
  // }, []);

  // compare the genres id to the movie genres id

  // console.log(genres)
  // console.log(trending[0]?.genre_ids)
  // trending[0]?.genre_ids.filter(item => {
  //   console.log(item === genres.id)
  // })

  // let foundGenres = [];

  // console.log(genres);

  // for (let i = 0; i < genres.length; i++) {
  //   for (let j = 0; j < trending[0]?.genre_ids.length; j++) {
  //     if (genres[i].id === trending[0]?.genre_ids[j]) {
  //       foundGenres.push(genres[i].name);
  //       // console.log(genres[i].name)
  //     }
  //   }
  // }

  // trending.map(item => console.log(item.genre_ids))

  // loop through genres
  // loop through trending

  // console.log(foundGenres);

  const spinnerStyling = {
    width: "4rem",
    height: "4rem",
    color: "#62ee81",
  };


  return (
    <div className="card--container">
      <div className="card--section">
        {loading ? (
          <CircularProgress className="spinner" style={spinnerStyling} />
        ) : (
          trending.map((movie) => {
            return (
              <Card
                info={movie}
                key={movie.id}
                genre={movie.genre_ids}
                // sending 'setTrending' state function into the CARD component
                setMedia={props.setMedia}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Trending;
