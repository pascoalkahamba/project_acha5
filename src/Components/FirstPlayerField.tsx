import { useState } from "react";
import { PlayerField } from "../MyStyles";

export interface PlayerProps {
  id: string;
  label: string;
  title: string;
}
const FirstPlayerField = () => {
  const [input, setInput] = useState("");
  return (
    <PlayerField>
      <label htmlFor="jogador1">Letras Descobertas(Possiveis): </label>
      <input
        type="text"
        id="jogador1"
        placeholder="Anotações"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
    </PlayerField>
  );
};

export default FirstPlayerField;
