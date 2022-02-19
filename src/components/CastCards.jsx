import React from "react";

function CastCards(props) {
  const { person } = props;
  // console.log(person)
  // const { cast } = props;
  const { character, name, profile_path } = person;
  // console.log(cast)
  // const { castList } = props;
  // const { name, character, profile_path } = castList
  console.log(profile_path);

  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png";

  return (
    <div data-aos="fade-up" className="cast--card">
      <img src={imgUrl} alt="" />
      <div className="card--text">
        <h3>{name}</h3>
        <p>as {character}</p>
      </div>
    </div>
  );
}

export default CastCards;
