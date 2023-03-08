import styled from "styled-components";

export default function Button({ label, onClick }) {
  return <CustomButton onClick={onClick}>{label}</CustomButton>;
}

const CustomButton = styled.button`
  border-radius: 5px;
  height: 30px;
  width: 150px;
  border: none;
  background-color: gray;
  color: white;
`;
