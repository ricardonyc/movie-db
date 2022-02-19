import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStream } from "react-icons/fa";

function Nav(props) {
  const [sidebar, setSidebar] = useState(false);

  function toggleSidebar() {
    setSidebar((prev) => !prev);
  }

  // console.log(sidebar);

  const underline = {
    textDecoration: "none",
  };

  // when one of the items are clicked, it changes color

  return (
    <div className="nav--container">
      <nav>
        <h1 onClick={toggleSidebar}>Movie DB</h1>
        {/* burger menu */}
        <FaStream
          onClick={toggleSidebar}
          className="burger--menu"
          style={{ cursor: "pointer" }}
        />

        {/* shadow overlay when sidebar opens */}
        <div
          onClick={toggleSidebar}
          className={sidebar ? "overlay" : null}
        ></div>

        <ul className={sidebar ? "sidebar move" : "sidebar"}>
          <Link to="home" style={underline}>
            <li>Home</li>
          </Link>
          <Link to="tv_shows" style={underline}>
            <li>TV Shows</li>
          </Link>
          <Link to="movies" style={underline}>
            <li>Movies</li>
          </Link>
          <Link to="now_playing" style={underline}>
            <li>Now Playing</li>
          </Link>
          {/* <Link to="search" style={underline}>
            <li>Search</li>
          </Link> */}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
