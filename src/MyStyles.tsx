import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";
interface FormProps {
  direction: React.CSSProperties["flexDirection"];
}
interface TestProps {
  active?: boolean;
  background: React.CSSProperties["background"];
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
  outline: none;

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
      display: block;
      input {
        margin-right: 1.5rem;
      }
      div {
        margin: 2rem 0.2rem auto auto;
      }
    `}
`;

export const SonDiv = styled.div<TestProps>`
  max-width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: ${({ background }) => background};
  box-shadow: 1px 1px 0.3rem blue;
  border-radius: 0.5rem;
  border: 2px solid blue;
  transition: 0.3s;

  .onlyError {
    display: block;
    font-size: 0.9rem;
    font-weight: normal;
    color: #ff0000c0 !important;
    font-style: italic;
    padding: 0.2rem;
    margin-left: 5rem;
    margin-top: -2rem;
  }

  .wrongWord {
    display: block;
    font-weight: normal;
    color: #ff0000c0 !important;
    font-style: italic;
    padding: 0.2rem;
    margin: auto;
  }

  ${({ active }) =>
    active === false &&
    css`
      box-shadow: 1px 1px 0.3rem #000;
      border: 2px solid #000;
      label {
        color: #000;
      }
      input,
      button {
        background-color: #3d3d3d;
        cursor: text;
        pointer-events: none;
        color: #797979;
      }
    `}

  ${({ background }) =>
    background === "rgb(157, 157, 250)" &&
    css`
      border: 2px solid white;
      padding: 1.5rem;
      p {
        margin: 1.5rem auto;
      }
      label {
        color: #fff;
      }
      span {
        color: blue !important;
      }
    `}
`;
export const ContentDiv = styled.div`
  background: white;
  max-width: 100%;
  border-radius: 0.5rem;

  .second {
    padding: 1.6rem;
  }
`;
export const PlayerField = styled.form`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  transition: 0.3s;
  label {
    color: #fff;
    font-size: 1.3rem;
  }

  input {
    width: 10rem;
    border: 1px #ccc solid;
    outline: none;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .rightWord {
    box-shadow: 1px 1px 0.5rem green;
    border: 2px solid green;
    transition: 0.3s;
  }

  .notIsWord {
    box-shadow: 1px 1px 0.5rem #ff0000c0;
    border: 2px solid #ff0000c0;
    transition: 0.3s;
  }
`;

export const DivModal = styled.div`
  display: block;
  position: absolute;
  z-index: 1000;
  top: 23rem;
  left: 3rem;
  right: 3rem;
  max-width: 40rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: rgb(157, 157, 250);
  border: 3px solid white;
  box-shadow: 1px 1px 0.5rem rgb(157, 157, 250);
`;
