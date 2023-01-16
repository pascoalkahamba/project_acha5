import React from "react";
import { DivModal } from "../MyStyles";
import Button from "./Button";

interface Props {
  winningPlayer: string;
  loserPlayer: string;
  secretWord: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ winningPlayer, loserPlayer, secretWord, setModal }: Props) => {
  const modalOut = () => {
    setModal(false);
    console.log("fechar o modal");
  };
  return (
    <DivModal>
      <h2>Temos um vencedor!</h2>
      <p>{`Parabéns ${winningPlayer} você descubriu a palavra secreta do ${loserPlayer}`}</p>
      <p>{`Pela próxima inventa uma palavra mas difícil  ${loserPlayer} parece que "${secretWord}" não é tão difícil.`}</p>
      <Button buttonName="fechar" onClick={() => modalOut()} />
    </DivModal>
  );
};

export default Modal;
