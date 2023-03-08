import styled from "styled-components";

export default function Search() {
  return (
    <>
      <AppTitle>
        <h1>Movie Finder</h1>
        <p>
          By using this app, you can easily and conveniently search for your
          favorite movies simply by providing their titles.
        </p>
      </AppTitle>
      <SearchBar>
        <input></input>
        <button>Search</button>
        <button>Reset</button>
      </SearchBar>
    </>
  );
}

const SearchBar = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AppTitle = styled.div`
  margin: 80px 0 40px 0;
  padding: 0 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    margin-bottom: 15px;
  }

  p {
    text-align: center;
  }
`;
