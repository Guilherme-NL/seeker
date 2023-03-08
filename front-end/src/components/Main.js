import Search from "./Search";

import styled from "styled-components";
import Header from "./Header";

export default function Main() {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20%;
`;
