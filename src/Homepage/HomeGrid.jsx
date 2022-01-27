import React from "react";

function HomeGrid({ info }) {
  const { title } = info;

  console.log(info);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default HomeGrid;
