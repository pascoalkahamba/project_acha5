import React from "react";
import { SonDiv } from "../MyStyles";
import Field from "./Field";
import FirstPlayerField from "./FirstPlayerField";
import SecondPlayerField from "./SecondPlayerField";
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
      {playerInformation[2] === "Jogador1" ? (
        <FirstPlayerField />
      ) : (
        <SecondPlayerField />
      )}

      <p>
        Quantidades de letras descobertas: <span>{discoveries}</span>
      </p>

      <Field label="A palavra é:  " title="Sera que sabes?" />
    </SonDiv>
  );
};

export default ResultEnd;
