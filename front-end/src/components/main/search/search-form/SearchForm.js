import { Button } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
import { reset, setMovieInfo } from "../../../../reducers/movieInfoSlice";
import { useDispatch } from "react-redux";

import "./search-form.scss";

import React from "react";
import axios from "axios";

export default function SearchForm() {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = React.useState("");

  function sendMovieName(e) {
    e.preventDefault();
    const url = `https://seeker-5fmu.vercel.app/movie/${movieName}`;
    axios
      .get(url)
      .then((response) => {
        setMovieName("");
        dispatch(setMovieInfo(response.data));
      })
      .catch((err) => {
        alert(err.response);
        setMovieName("");
      });
  }

  return (
    <form className="search-form" onSubmit={sendMovieName}>
      <input
        className="custom-input"
        type="text"
        required
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <Button className="custom-button" submits>
        Search
      </Button>
      <Button className="custom-button" onClick={() => dispatch(reset())}>
        Reset
      </Button>
    </form>
  );
}
