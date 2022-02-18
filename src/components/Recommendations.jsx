import React, { useState } from "react";
import MoviePageCard from "./MoviePageCard";

function Recommendations(props) {
  const { recommendations } = props;
  const [visible, setVisible] = useState(4);

  // recommendations pagination
  const showMoreItems = () => {
    setVisible((prev) => prev + 5);
  };

  return (
    <div className="recommendations--section">
      <h2>Recommended</h2>
      <div className="recommendation--cards">
        {/* if NO recommendations, returns SVG */}
        {recommendations.length > 0 ? (
          recommendations.slice(0, visible).map((movie) => {
            return <MoviePageCard key={movie.id} info={movie} />;
          })
        ) : (
          <img
            src="https://i.pinimg.com/originals/26/da/36/26da36fa5b621bd90b0a7ec755833ea9.png"
            alt=""
          />
        )}
      </div>

      {visible < recommendations.length ? (
        <button onClick={showMoreItems}>More</button>
      ) : null}
    </div>
  );
}

export default Recommendations;
