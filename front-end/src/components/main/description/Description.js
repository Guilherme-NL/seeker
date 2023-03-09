import React from "react";

import { Rating } from "react-simple-star-rating";

import "./description.scss";

export default function Description({ moveInfo }) {
  return moveInfo ? (
    <div className="description-container">
      <div className="move-description">
        <h1>{moveInfo.Title}</h1>
        <p>
          <span>Genre</span> {moveInfo.Genre}
        </p>
        <p>{moveInfo.Plot}</p>
        <p>
          <span>Actors:</span> {moveInfo.Actors}
        </p>
        <p>
          <span>Review:</span>{" "}
          <Rating
            initialValue={Number(moveInfo.imdbRating) / 2}
            allowFraction="true"
            size={20}
            readonly={true}
          />
        </p>
      </div>
      <img className="poster" src={moveInfo.Poster} alt="move" />
    </div>
  ) : (
    <></>
  );
}
