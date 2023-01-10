import { Form } from "../MyStyles";
import Button from "./Button";
interface Props {
  label: string;
  value?: {
    jogador1: string;
    jogador2: string;
  };
  title: string;
}
const Field = ({ label, title }: Props) => {
  return (
    <Form direction="row">
      <label htmlFor="jogador">{label}</label>
      <input type="text" placeholder={title} id="jogador" />
      <Button buttonName="teste" onClick={() => console.log("Hello")} />
    </Form>
  );
};

export default Field;
