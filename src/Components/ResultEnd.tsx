import React from "react";
import { SonDiv } from "../MyStyles";
import Field from "./Field";

const ResultEnd = () => {
  return (
    <SonDiv background="rgb(157, 157, 250)">
      <h2>Jogador</h2>
      <p>
        Mensagem: <span>aaaa tem 0 letras da palavra secreta do jogadorx</span>
      </p>
      <Field
        button={false}
        resultEnd={Function}
        setActive={Function}
        title="Anotações"
        label="Letras Descobertas(Possiveis):  "
      />

      <p>
        Quantidades de letras descobertas:
        <span> 0</span>
      </p>

      <Field
        resultEnd={Function}
        setActive={Function}
        button={false}
        label="A palavra é:  "
        title="Sera que sabes?"
      />
    </SonDiv>
  );
};

export default ResultEnd;
