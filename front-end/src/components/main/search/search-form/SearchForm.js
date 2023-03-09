import { Button } from "@ui5/webcomponents-react";
import { Input } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

import "./search-form.scss";

import React from "react";
import axios from "axios";

export default function SearchForm({ setMoveInfo }) {
  const [movieName, setMovieName] = React.useState("");

  function sendMovieName(e) {
    e.preventDefault();
    const url = `http://localhost:4000/move/${movieName}`;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setMovieName("");
        setMoveInfo(response.data);
      })
      .catch((err) => {
        alert(err.response);
        setMovieName("");
      });
  }

  return (
    <form className="search-form" onSubmit={sendMovieName}>
      <Input
        className="custom-input"
        type="text"
        required
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <Button className="custom-button" submits="true">
        Search
      </Button>
      <Button className="custom-button">Reset</Button>
    </form>
  );
}
