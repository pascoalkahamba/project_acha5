import styled from "styled-components";

export const Section = styled.section`
  h1 {
    margin-top: -8px;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    max-width: 100%;
    background: rgba(0, 0, 255, 0.774);
  }
  .content {
    background: rgb(1, 1, 71);
    border-radius: 0.5rem;
  }

  .message {
    padding: 1rem;
  }
  .center {
    text-align: center;
  }
  .form {
    border-radius: 0.5rem;
    margin-top: 3rem;
    background: white;
  }
  .inputs {
    padding: 1rem;
  }
  span {
    font-style: italic;
    color: rgba(255, 0, 0, 0.767);
    font-size: 1.5rem;
  }
`;
