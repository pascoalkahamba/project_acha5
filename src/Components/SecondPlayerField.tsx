import { useState } from "react";
import { PlayerField } from "../MyStyles";

const SecondPlayerField = () => {
  const [input, setInput] = useState("");
  return (
    <PlayerField>
      <label htmlFor="jogador2">Letras Descobertas(Possiveis): </label>
      <input
        type="text"
        maxLength={5}
        id="jogador2"
        placeholder="Anotações"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
    </PlayerField>
  );
};

export default SecondPlayerField;
