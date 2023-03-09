import React from "react";
import { useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";

import "./description.scss";

export default function Description() {
  const movieInfo = useSelector((state) => state.movieInfo.value);
  return movieInfo ? (
    <div className="description-container">
      <div className="move-description">
        <h1>{movieInfo.Title}</h1>
        <p>
          <span>Genre</span> {movieInfo.Genre}
        </p>
        <p>{movieInfo.Plot}</p>
        <p>
          <span>Actors:</span> {movieInfo.Actors}
        </p>
        <p>
          <span>Review:</span>{" "}
          <Rating
            initialValue={Number(movieInfo.imdbRating) / 2}
            allowFraction="true"
            size={20}
            readonly={true}
          />
        </p>
      </div>
      <img className="poster" src={movieInfo.Poster} alt="move" />
    </div>
  ) : null;
}
