import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px 0;
  background-color: #2a2a2aff;
`;
export const Input = styled.input`
  width: 300px;
  height: 40px;
  background-color: #1c1c1cff;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-family: "Krub", sans-serif;
  font-size: 18px;
  padding: 0 20px;
  border-radius: 32px;

  &:hover,
  &:focus {
    border: 2px solid #8c00ffff;
  }
`;
export const Button = styled.button`
  height: 40px;
  background-color: #8c00ffff;
  color: #ffffff;
  font-family: "Krub", sans-serif;
  font-size: 18px;
  padding: 0 20px;
  border-radius: 32px;

  &:hover {
    background-color: #6b00c2ff;
  }
`;
