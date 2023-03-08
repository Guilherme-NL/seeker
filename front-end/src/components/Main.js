import Search from "./Search";

import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
  return (
    <Container>
      <Header />
      <Search />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20%;
`;
