import styled from "styled-components";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <CustomInput
      type={type}
      className="default-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

const CustomInput = styled.input`
  padding: 10px;
  height: 30px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
