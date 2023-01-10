import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";
interface FormProps {
  direction: React.CSSProperties["flexDirection"];
}
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

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
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
  ${({ direction }) =>
    direction === "row" &&
    css`
      align-items: center;
    `}
`;

export const SonDiv = styled.div`
  max-width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: #fff;
  box-shadow: 1px 1px 0.3rem blue;
  border-radius: 0.5rem;
  border: 2px solid blue;
`;
export const ContentDiv = styled.div`
  background: white;
  max-width: 100%;
  border-radius: 0.5rem;

  .second {
    padding: 1.6rem;
  }
`;

const NewForm = styled(Form)`
  align-items: center;
`;
