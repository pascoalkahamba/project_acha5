import React, { useState } from "react";
import { PlayerField, SonDiv } from "../MyStyles";
import Button from "./Button";

import FirstPlayerField from "./FirstPlayerField";

interface Props {
  playerInformation: string[];
  discoveries: number;
  playerWord: {
    firstPlayer: string;
    secondPlayer: string;
  };
  setPlayerWord: React.Dispatch<
    React.SetStateAction<{
      firstPlayer: string;
      secondPlayer: string;
    }>
  >;
}
type ChangeProps = React.ChangeEventHandler<HTMLInputElement> | undefined;

const ResultEnd = ({
  playerInformation,
  discoveries,
  playerWord,
  setPlayerWord,
}: Props) => {
  const [rightWord, setRightWord] = useState("");

  const handleChange: ChangeProps = ({ target }) => {
    setRightWord(target.value);
  };

  const isSameWord = () => {
    console.log("teste");
    if (rightWord.length < 5) {
      alert("ERRO! a palavra tem que ser maior que 5");
    } else {
      if (rightWord === playerInformation[3]) {
        alert("Parabens voce descubriu a palavra");
      } else {
        alert("Palavra errada tente novamente");
      }
    }
    setRightWord("");
  };

  return (
    <SonDiv background="rgb(157, 157, 250)">
      <h2>{playerInformation[2]}</h2>
      <p>
        Mensagem:{" "}
        <span>
          {`${playerInformation[0]}  tem ${discoveries} letras da palavra secreta do ${playerInformation[1]}`}
        </span>
      </p>

      <FirstPlayerField
        currentPlayer={playerInformation[2]}
        playerWord={playerWord}
        setPlayerWord={setPlayerWord}
      />

      <p>
        Quantidades de letras descobertas: <span>{discoveries}</span>
      </p>
      <PlayerField onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="seraQueSabes">A palavra é: </label>
        <input
          type="text"
          maxLength={5}
          id="seraQueSabes"
          value={rightWord}
          placeholder="Sera que sabes?"
          onChange={handleChange}
        />
        <Button buttonName="verificar" onClick={() => isSameWord()} />
      </PlayerField>
    </SonDiv>
  );
};

export default ResultEnd;
