import Search from "./Search";

import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <Search />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20%;
`;
