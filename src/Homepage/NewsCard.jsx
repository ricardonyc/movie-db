import React from "react";

function NewsCard(props) {
  const {
    byline,
    publication_date,
    display_title,
    headline,
    link,
    multimedia,
    summary_short,
    mpaa_rating,
  } = props.info;

  //   console.log(props.info);

  return (
    <div className="news--card">
      <img src={multimedia.src} alt="" />
      <div className="text--container">
        <h2>{headline}</h2>
        <p>{summary_short}</p>
        <a href={link.url} target="_blank">
          {link.suggested_link_text}
        </a>
        <p>
          <small>{byline}</small>
        </p>
        <p>
          <small>{publication_date}</small>
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
