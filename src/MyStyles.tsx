import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  --type-first: Arial, Helvetica, sans-serif;
  font-family: var(--type-first);
  margin: 1rem;
  font-size: 1.3rem;
  background: rgb(157, 157, 250);
  color: white;
}
`;

export const GeneralButton = styled.button`
  background: blue;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  color: white;
  font-weight: bold;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: rgb(0, 0, 116);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;

  label {
    color: blue;
    font-size: 1.3rem;
    font-weight: bold;
  }

  input {
    width: 10rem;
    border: 1px #ccc solid;
    outline: none;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;
