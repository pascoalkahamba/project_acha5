import React from "react";
import { SonDiv } from "../MyStyles";
import Field from "./Field";
interface Props {
  playerInformation: string[];
  discoveries: number;
}
const ResultEnd = ({ playerInformation, discoveries }: Props) => {
  return (
    <SonDiv background="rgb(157, 157, 250)">
      <h2> {playerInformation[2]}</h2>
      <p>
        Mensagem:{" "}
        <span>
          {`${playerInformation[0]}  tem ${discoveries} letras da palavra secreta do ${playerInformation[1]}`}
        </span>
      </p>
      <Field title="Anotações" label="Letras Descobertas(Possiveis):  " />

      <p>
        Quantidades de letras descobertas: <span>{discoveries}</span>
      </p>

      <Field label="A palavra é:  " title="Sera que sabes?" />
    </SonDiv>
  );
};

export default ResultEnd;
