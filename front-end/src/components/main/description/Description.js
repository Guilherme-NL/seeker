import axios from "axios";
import React from "react";

import { Rating } from "react-simple-star-rating";

import "./description.scss";

export default function Description() {
  const move = {
    Title: "Avatar",
    Genre: "Action, Adventure, Fantasy",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
    Plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    imdbRating: "7.9",
  };

  return (
    <div className="description-container">
      <div className="move-description">
        <h1>{move.Title}</h1>
        <p>
          <span>Genre</span> {move.Genre}
        </p>
        <p>{move.Plot}</p>
        <p>
          <span>Actors:</span> {move.Actors}
        </p>
        <p>
          <span>Review:</span>{" "}
          <Rating
            initialValue={Number(move.imdbRating) / 2}
            allowFraction="true"
            size={20}
            readonly={true}
          />
        </p>
      </div>
      <img className="poster" src={move.Poster} alt="move" />
    </div>
  );
}
