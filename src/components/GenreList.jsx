import React from "react";

function GenreList(props) {

    const { genreList } = props

  return (
    <div className="genres--container">
      {genreList.map((item) => {
        return <p className="genre--name">{item}</p>;
      })}
    </div>
  );
}

export default GenreList;
