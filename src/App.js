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

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path='/tv_shows' element={<TvShows />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/now_playing" element={<NowPlaying />} />
          <Route path={`/:page/:id`} element={<MoviePage />} />
          
          <Route path="/search" element={<Search />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
