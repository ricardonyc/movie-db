import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function Home(props) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=qznGEgQLQCdqgA3JQF2bn8q3nLdijWEo`
    );
    setReviews(data.results);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      fetchReviews();
    }, 400);
  }, []);

  const spinnerStyling = {
    width: "4rem",
    height: "4rem",
    color: "#62ee81",
  };

  return (
    <>
      <h1 className="nyt--h1">New York Times Trending Movie Stories</h1>
      <div className="home--container">
        {loading ? (
          <CircularProgress style={spinnerStyling} />
        ) : (
          reviews.map((item) => {
            return <NewsCard key={item.display_title} info={item} />;
          })
        )}
      </div>
    </>
  );
}

export default Home;
