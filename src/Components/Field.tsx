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

type PropsSameValue = React.ChangeEventHandler<HTMLInputElement> | undefined;
const Field = ({ label, title, setActive, active, id }: Props) => {
  const [input, setInput] = useState("");
  const handleClick = () => {
    setActive();
    setInput("");
  };
  const sameValue: PropsSameValue = ({ target }) => {
    setInput(target.value);
  };

  return (
    <Form direction="row" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        placeholder={title}
        maxLength={5}
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
