import React from "react";

function GenreList(props) {

    const { genreList } = props

  return (
    <div className="genres--container">
      {genreList.map((item, index) => {
        return <p key={index} className="genre--name">{item}</p>;
      })}
    </div>
  );
}

export default GenreList;
