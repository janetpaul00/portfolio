import { useEffect, useState } from "react";

export default function Cards({ details, page }) {
  // console.log(`length of details array: ${details.length}`);

  return (
    <>
      {details.slice(page * 3, page * 3 + 3).map((details, index) => (
        <div key={index} className="card">
          <img
            className="card-img"
            src={details.image}
            height="200px"
            width="300px"
            alt={details.alt}
          />
          <div className="card-text">
            <p className="card-hashtags">{details.hashtags}</p>
            <h3 className="card-header">{details.header}</h3>
            <p className="card-about">{details.about}</p>
          </div>
          <div className="card-buttons">
            <button className="buttons">Blog</button>
            <button className="buttons">Vlog</button>
          </div>
        </div>
      ))}
    </>
  );
}
