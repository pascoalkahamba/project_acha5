import { useState } from "react";
import { Form } from "../MyStyles";
import { DivError } from "../StylesHome";
import Button from "./Button";

type PropsSameValue = React.ChangeEventHandler<HTMLInputElement> | undefined;
interface Props {
  label: string;
  value?: {
    jogador1: string;
    jogador2: string;
  };
  id?: string;
  title: string;
  active?: boolean;
  button: boolean;
  setActive: Function;
  resultEnd: Function;
}

const Field = ({
  label,
  title,
  setActive,
  active,
  id,
  value,
  resultEnd,
  button,
}: Props) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (input.length < 5) {
      setError(true);
    } else {
      setError(false);
      setActive();
      setInput("");
      resultEnd(true);
    }
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
      {button && (
        <Button
          buttonName="teste"
          onClick={() => handleClick()}
          active={active}
        />
      )}
      {error && (
        <DivError>
          O texto digitado nos campos tem de ter no minimo e no maximo 5
          caracteres!
        </DivError>
      )}
    </Form>
  );
};

export default Field;
