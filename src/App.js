import React, { useState, useEffect, createContext } from "react";
import "./styles/style.css";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trending from "./components/Pages/Movies";
import Movies from "./components/Pages/Movies";
import NowPlaying from "./components/Pages/NowPlaying";
import TvShows from "./components/Pages/TvShows";
import Search from "./components/Pages/Search";
import Home from "./Homepage/Home";
import MoviePage from "./components/MoviePage";
import PageNotFound from "./components/PageNotFound";
// import { ThemeContext } from "@emotion/react";

export const RecommendationsContext = createContext();

function App() {
  const [media, setMedia] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [cast, setCast] = useState([]);

  const info = {
    recommendations: recommendations,
    media: media,
    setMedia: setMedia,
    setRecommendations: setRecommendations,
    cast: cast,
    setCast: setCast,
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
    const castData = localStorage.getItem("cast-list");
    if (recommendationsData) {
      setRecommendations(JSON.parse(recommendationsData));
      setCast(JSON.parse(castData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "recommendations-list",
      JSON.stringify(recommendations)
    );
    localStorage.setItem("cast-list", JSON.stringify(cast));
  });

  return (
    <Router>
      <RecommendationsContext.Provider value={info}>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tv_shows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/now_playing" element={<NowPlaying />} />
            <Route path={`/:page/:id`} element={<MoviePage />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </RecommendationsContext.Provider>
    </Router>
  );
}

export default App;
