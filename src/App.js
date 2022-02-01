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
import { ThemeContext } from "@emotion/react";

export const RecommendationsContext = createContext();

function App() {
  const [media, setMedia] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // trending state becomes empty when page is refreshed
  // and useState([]) sets it to an empty array
  // trending state becomes empty when MoviePage component is refreshed
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

  // console.log(genres.genres)

  return (
    <Router>
      <RecommendationsContext.Provider value={recommendations}>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv_shows" element={<TvShows setMedia={setMedia} />} />
            {/* send the setTrending function into TRENDING component */}
            <Route
              path="/trending"
              element={<Trending setMedia={setMedia} />}
            />
            <Route
              path="/now_playing"
              element={<NowPlaying setMedia={setMedia} />}
            />
            {/* trending gets a new state, state passed into MoviePage with new data */}
            <Route
              path={`/:page/:id`}
              element={
                <MoviePage
                  media={media}
                  // recommendations={recommendations}
                  setRecommendations={setRecommendations}
                />
              }
            />
            <Route path="/search" element={<Search />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </RecommendationsContext.Provider>
    </Router>
  );
}

export default App;
