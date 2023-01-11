import { useState } from "react";
import { Form } from "../MyStyles";
import Button from "./Button";

interface Props {
  label: string;
  value?: {
    jogador1: string;
    jogador2: string;
  };
  id: string;
  title: string;
  active: boolean;
  setActive: Function;
}
const Field = ({ label, title, setActive, active, id }: Props) => {
  const [input, setInput] = useState("");
  const handleClick = (): boolean => {
    setActive(!active);
    console.log(active);
    return active;
  };
  const sameValue = () => {
    setInput(input);
    console.log("Mesmo Valor");
  };
  console.log(active);
  return (
    <Form direction="row" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        placeholder={title}
        id={id}
        value={input}
        disabled={active}
        onChange={sameValue}
      />
      <Button
        buttonName="teste"
        onClick={() => handleClick()}
        active={active}
      />
    </Form>
  );
};

export default Field;
