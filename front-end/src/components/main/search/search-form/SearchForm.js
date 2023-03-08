import { Button } from "@ui5/webcomponents-react";
import { Input } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

import "./search-form.scss";

import React from "react";
import axios from "axios";

export default function SearchForm() {
  const [moveName, setMoveName] = React.useState("");

  function sendMoveName(e) {
    e.preventDefault();
    const url = "http://localhost:4000/";
    const body = { moveName };
    axios
      .post(url, body)
      .then(setMoveName(""))
      .catch((err) => {
        alert(err.response);
        setMoveName("");
      });
  }

  return (
    <form className="search-form" onSubmit={sendMoveName}>
      <Input
        className="custom-input"
        type="text"
        required
        value={moveName}
        onChange={(e) => setMoveName(e.target.value)}
      />
      <Button className="custom-button" submits="true">
        Search
      </Button>
      <Button className="custom-button">Reset</Button>
    </form>
  );
}
