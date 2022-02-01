import React, { useState, useEffect, createContext } from "react";
import "./styles/style.css";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import Movies from "./components/Movies";
import NowPlaying from "./components/NowPlaying";
import TvShows from "./components/TvShows";
import Search from "./components/Search";
import Home from "./Homepage/Home";
import MoviePage from "./components/MoviePage";
// import { ThemeContext } from "@emotion/react";

export const RecommendationsContext = createContext();

function App() {
  const [media, setMedia] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const info = {
    recommendations: recommendations,
    media: media,
    setMedia: setMedia,
    setRecommendations: setRecommendations,
  };

  // state becomes empty when page is refreshed
  // and useState([]) sets it to an empty array
  // state becomes empty when MoviePage component is refreshed
  // setting local storage so that MoviePage shows movie details
  useEffect(() => {
    const mediaData = localStorage.getItem("media-list");
    if (mediaData) {
      setMedia(JSON.parse(mediaData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("media-list", JSON.stringify(media));
  });

  // Saving recommendations in local storage
  useEffect(() => {
    const recommendationsData = localStorage.getItem("recommendations-list");
    if (recommendationsData) {
      setRecommendations(JSON.parse(recommendationsData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "recommendations-list",
      JSON.stringify(recommendations)
    );
  });

  return (
    <Router>
      <RecommendationsContext.Provider value={info}>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv_shows" element={<TvShows />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/now_playing" element={<NowPlaying />} />
            <Route path={`/:page/:id`} element={<MoviePage />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </RecommendationsContext.Provider>
    </Router>
  );
}

export default App;
