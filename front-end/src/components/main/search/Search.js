import SearchForm from "./search-form/SearchForm";

import "./search.scss";

export default function Search({ setMoveInfo }) {
  return (
    <div className="container">
      <div className="app-title">
        <h1>Movie Finder</h1>
        <p>
          By using this app, you can easily and conveniently search for your
          favorite movies simply by providing their titles.
        </p>
      </div>
      <SearchForm setMoveInfo={setMoveInfo} />
    </div>
  );
}
