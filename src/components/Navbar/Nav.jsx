import React from "react";
import BottomNav from "./BottomNav";
import { Link } from "react-router-dom";

function Nav(props) {
  const underline = {
    textDecoration: "none",
  };

  return (
    <div className="nav--container">
      <nav>
        <h1>Movie DB</h1>
        <ul>
          <Link to="movies" style={underline}>
            <li>Movies</li>
          </Link>
          <Link to="tv_shows" style={underline}>
            <li>TV Shows</li>
          </Link>
          <Link to="trending" style={underline}>
            <li>Trending</li>
          </Link>
          <Link to="now_playing" style={underline}>
            <li>Now Playing</li>
          </Link>
          <li>Search</li>
        </ul>
      </nav>
      {/* <BottomNav className="BottomNav" /> */}
    </div>
  );
}

export default Nav;

// FaEllo
