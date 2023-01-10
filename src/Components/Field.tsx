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
  const handleClick = () => {
    setActive(!active);
    console.log(active);
  };
  return (
    <Form direction="row" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        placeholder={title}
        id={id}
        disabled={active === true ? true : false}
      />
      <Button buttonName="teste" onClick={() => handleClick()} />
    </Form>
  );
};

export default Field;
