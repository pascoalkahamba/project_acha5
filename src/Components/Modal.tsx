import React from "react";
import { useNavigate } from "react-router-dom";
import { DivModal, FatherModal } from "../MyStyles";
import Button from "./Button";

interface Props {
  winningPlayer: string;
  loserPlayer: string;
  secretWord: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<
    React.SetStateAction<{
      jogador1: string;
      jogador2: string;
    }>
  >;
}
const Modal = ({
  winningPlayer,
  loserPlayer,
  secretWord,
  setModal,
  setValue,
}: Props) => {
  const navigate = useNavigate();
  window.document.body.classList.add("opacity");
  const modalOut = () => {
    setModal(false);
    setValue({ jogador1: "", jogador2: "" });
    window.document.body.classList.remove("opacity");
    navigate("/");
  };
  return (
    <FatherModal>
      <DivModal>
        <h2>Temos um vencedor!</h2>
        <p>{`Parabéns ${winningPlayer} você descobriu a palavra secreta do ${loserPlayer}`}</p>
        <p>{`Pela próxima inventa uma palavra mas difícil  ${loserPlayer} parece que "${secretWord}" não é tão difícil.`}</p>
        <Button buttonName="fechar" onClick={() => modalOut()} />
      </DivModal>
    </FatherModal>
  );
};

export default Modal;
