import React from "react";
import { FaPoo } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { BsFillEmojiNeutralFill } from "react-icons/bs";

function Recommendations(props) {
  const { voteAverage } = props;

  return (
    <div className="rating--section">
      {voteAverage >= 8 ? (
        <AiFillFire className="fire" />
      ) : voteAverage >= 7 ? (
        <BsFillEmojiNeutralFill className="neutral" />
      ) : (
        <FaPoo className="poo" />
      )}
      {voteAverage ? voteAverage : null}
    </div>
  );
}

export default Recommendations;
