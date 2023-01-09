import { GeneralButton } from "../MyStyles";

type Parameter = {
  buttonName: string;
};
const Button = ({ buttonName }: Parameter) => {
  return <GeneralButton>{buttonName}</GeneralButton>;
};

export default Button;
