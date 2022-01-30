import React, { useState, useEffect } from "react";
import "./styles/style.css";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import Movies from "./components/Movies";
import NowPlaying from "./components/NowPlaying";
import TvShows from "./components/TvShows";
import Search from "./components/Search";
import Home from "./Homepage/Home";
// import Footer from './components/Footer';
import MoviePage from "./components/MoviePage";

function App() {
  const [trending, setTrending] = useState([]);

  // console.log(trending);
  // trending state becomes empty when page is refreshed
  // and useState([]) sets it to an empty array
  // trending state becomes empty when MoviePage component is refreshed
  // setting local storage so that MoviePage shows movie details
  useEffect(() => {
    const trendingData = localStorage.getItem("trending-list");
    if (trendingData) {
      setTrending(JSON.parse(trendingData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("trending-list", JSON.stringify(trending));
  }); 
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv_shows" element={<TvShows />} />
          {/* send the setTrending function into TRENDING component */}
          <Route
            path="/trending"
            element={<Trending setTrending={setTrending} />}
          />
          <Route path="/now_playing" element={<NowPlaying />} />
          {/* trending gets a new state, state passed into MoviePage with new data */}
          <Route
            path={`/:page/:id`}
            element={<MoviePage trending={trending} />}
          />

          <Route path="/search" element={<Search />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
