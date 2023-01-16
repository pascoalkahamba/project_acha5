import React, { useEffect, useState } from "react";
import { PlayerField, SonDiv } from "../MyStyles";
import Button from "./Button";

import GeneralPlayerField from "./GeneralPlayerField";
import Modal from "./Modal";

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
  setValue: React.Dispatch<
    React.SetStateAction<{
      jogador1: string;
      jogador2: string;
    }>
  >;
  error: boolean;
  wrongWord: boolean;
  inputClass: string;
  rightWord: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setWrongWord: React.Dispatch<React.SetStateAction<boolean>>;
  setInputClass: React.Dispatch<React.SetStateAction<string>>;
  setRightWord: React.Dispatch<React.SetStateAction<string>>;
}
type ChangeProps = React.ChangeEventHandler<HTMLInputElement> | undefined;

const ResultEnd = ({
  playerInformation,
  discoveries,
  playerWord,
  setPlayerWord,
  error,
  wrongWord,
  inputClass,
  rightWord,
  setInputClass,
  setError,
  setValue,
  setWrongWord,
  setRightWord,
}: Props) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (rightWord.length >= 5 && rightWord === playerInformation[3]) {
      setInputClass("rightWord");
      setError(false);
      setWrongWord(false);
    } else if (rightWord.length >= 5 && rightWord !== playerInformation[3]) {
      setInputClass("notIsWord");
      setError(false);
      setWrongWord(false);
    }
  }, [rightWord]);

  const handleChange: ChangeProps = ({ target }) => {
    setRightWord(target.value);
    console.log("Hello");
  };

  const isSameWord = () => {
    console.log("teste");
    if (rightWord.length < 5) {
      setWrongWord(false);
      setError(true);
      setInputClass("");
    } else {
      setInputClass("");
      setError(false);
      if (rightWord === playerInformation[3]) {
        setModal(true);
        setWrongWord(false);
      } else {
        setWrongWord(true);
      }
    }
    setRightWord("");
  };

  return (
    <SonDiv background="rgb(157, 157, 250)" className="disappear">
      <h2>{playerInformation[2]}</h2>
      <p>
        Mensagem:{" "}
        <span>
          {`${playerInformation[0]}  tem ${discoveries} letras da palavra secreta do ${playerInformation[1]}`}
        </span>
      </p>

      <GeneralPlayerField
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
          className={inputClass}
          id="seraQueSabes"
          value={rightWord}
          placeholder="Sera que sabes?"
          onChange={handleChange}
        />
        <Button buttonName="verificar" onClick={() => isSameWord()} />
      </PlayerField>
      {error && (
        <span className="onlyError">palavra têm que ter 5 caracteres </span>
      )}
      {wrongWord && (
        <span className="wrongWord">Palavra errada tente novamente</span>
      )}
      {modal && (
        <Modal
          winningPlayer={playerInformation[2]}
          loserPlayer={playerInformation[1]}
          secretWord={playerInformation[3]}
          setModal={setModal}
          setValue={setValue}
        />
      )}
    </SonDiv>
  );
};

export default ResultEnd;
