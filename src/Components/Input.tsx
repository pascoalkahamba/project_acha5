import { Form } from "../MyStyles";

type Parameters = {
  setValue: Function;
  value: {
    jogador1: string;
    jogador2: string;
  };
};
interface FormProps {
  direction: React.CSSProperties["flexDirection"];
}

export interface InputType {
  target: HTMLInputElement;
}
const Input = ({ value, setValue }: Parameters) => {
  const handleChange = ({ target }: InputType) => {
    setValue({ ...value, [target.id]: target.value });
  };
  return (
    <Form direction="column">
      <div>
        <label htmlFor="jogador1">Palavra do Jogador 1: </label>
        <input
          type="text"
          maxLength={5}
          value={value.jogador1}
          placeholder="  Jogador 1"
          id="jogador1"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="jogador2">Palavra do Jogador 2: </label>
        <input
          type="text"
          maxLength={5}
          value={value.jogador2}
          placeholder="  Jogador 2"
          id="jogador2"
          onChange={handleChange}
        />
      </div>
    </Form>
  );
};

export default Input;
