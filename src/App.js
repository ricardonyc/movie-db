import "./styles/style.css";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trending from "./components/Trending";
import BottomNav from "./components/Navbar/BottomNav";
import Movies from "./components/Movies";
import NowPlaying from "./components/NowPlaying";
import TvShows from "./components/TvShows";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <BottomNav /> */}
        <Routes>
          {/* <Route path="/" element={} /> */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv_shows" element={<TvShows />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/now_playing" element={<NowPlaying />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
