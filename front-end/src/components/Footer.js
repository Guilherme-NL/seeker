import styled from "styled-components";

export default function Footer() {
  return <FooterBar />;
}

const FooterBar = styled.div`
  z-index: 1;
  background-color: #ffffff;
  width: 100%;
  height: 70px;
  border-top: solid 2px darkgray;
  position: fixed;
  left: 0;
  bottom: 0;
`;
