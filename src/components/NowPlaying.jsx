import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function NowPlaying(props) {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [checked, setChecked] = useState(false);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );

    setNowPlaying(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  // console.log(nowPlaying);

  // console.log(props)

  // checkbox is checked ? sort them
  // box set to true ? sort them

  // we need the previous value
  // and the SORTED value

  // if the checkbox is CHECKED ? set the data as sorted and if not, set it to original

  // when you click checkbox, it gets an attribute of "CHECKED"
  // and that evaluates to a boolean

  const toggleSort = (e) => {
    setChecked((prev) => !prev);
    // setSorted((prev) => !prev);
    // take in the checked value of input
    // if true (checked) then run the setData function and sort
    // if false (not checked) then run the other function that sets to the original
    setNowPlaying(
      nowPlaying
        .sort((item1, item2) => item1.vote_average - item2.vote_average)
        .reverse()
    );
  };
  // console.log(checked ? "CHECKED" : "not checked");

  return (
    <div className="card--container">
      <label htmlFor="high" style={{ color: "white" }}>
        Highest to Lowest rated
      </label>
      <input type="checkbox" checked={checked} onChange={toggleSort} />

      <div className="card--section">
        {nowPlaying.map((movie) => {
          return <Card info={movie} key={movie.id} setMedia={props.setMedia} />;
        })}
      </div>
    </div>
  );
}

export default NowPlaying;
