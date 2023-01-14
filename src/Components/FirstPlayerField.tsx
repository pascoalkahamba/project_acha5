import { useState } from "react";
import { PlayerField } from "../MyStyles";

type FirstProps = React.ChangeEventHandler<HTMLInputElement> | undefined;
const FirstPlayerField = () => {
  const [input, setInput] = useState("");
  let firstPlayer: string | null;

  const handleChange: FirstProps = ({ target }) => {
    setInput(target.value);
    console.log(firstPlayer);
    sessionStorage.setItem("first", input);
    if (typeof sessionStorage.getItem("first") === null) {
      console.log("Erro de Busca!");
    } else if (typeof sessionStorage.getItem("first") === "string") {
      firstPlayer = sessionStorage.getItem("first");
    }

    console.log(firstPlayer);
  };
  const handleBlur:
    | React.FocusEventHandler<HTMLInputElement>
    | undefined = () => {
    console.log("Pascoal");
    console.log(firstPlayer);
    if (typeof firstPlayer === "string") {
      setInput(firstPlayer);
      console.log(firstPlayer);
      console.log(input);
    }
  };
  return (
    <PlayerField>
      <label htmlFor="jogador1">Letras Descobertas(Possiveis): </label>
      <input
        type="text"
        id="jogador1"
        maxLength={5}
        value={input}
        placeholder="Anotações"
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </PlayerField>
  );
};

export default FirstPlayerField;
