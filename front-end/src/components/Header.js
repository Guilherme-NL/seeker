import styled from "styled-components";

export default function Header() {
  return <HeaderBar />;
}

const HeaderBar = styled.div`
  z-index: 1;
  width: 100%;
  height: 70px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  left: 0;
  top: 0;
`;
