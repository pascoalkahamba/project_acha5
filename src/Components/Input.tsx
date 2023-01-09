import { Form } from "../MyStyles";
type Parameters = {
  title: string;
  label: string;
};

const Input = ({ title, label }: Parameters) => {
  return (
    <Form>
      <label htmlFor="name">{label}</label>
      <input type="text" placeholder={title} id="name" />
    </Form>
  );
};

export default Input;
