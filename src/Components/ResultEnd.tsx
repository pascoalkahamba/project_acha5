import React, { useState } from "react";
import { PlayerField, SonDiv } from "../MyStyles";
import Button from "./Button";

import FirstPlayerField from "./FirstPlayerField";
import SecondPlayerField from "./SecondPlayerField";
interface Props {
  playerInformation: string[];
  discoveries: number;
}
type ChangeProps = React.ChangeEventHandler<HTMLInputElement> | undefined;

const ResultEnd = ({ playerInformation, discoveries }: Props) => {
  const [rightWord, setRightWord] = useState("");

  const isSameWord = () => {
    console.log("teste");
  };

  const handleChange: ChangeProps = ({ target }) => {
    setRightWord(target.value);
    if (rightWord.length == 5 && rightWord === playerInformation[3])
      alert("Parabens voce descubriu");
    else if (rightWord.length == 5 && rightWord !== playerInformation[3])
      alert("Palavra errada tente novamente");
  };
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
      <PlayerField>
        <label htmlFor="seraQueSabes">A palavra é: </label>
        <input
          type="text"
          maxLength={5}
          id="seraQueSabes"
          placeholder="Sera que sabes?"
          onChange={handleChange}
        />
        <Button buttonName="verificar" onClick={() => isSameWord()} />
      </PlayerField>
    </SonDiv>
  );
};

export default ResultEnd;
