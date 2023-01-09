import { GeneralButton } from "../MyStyles";

type Parameter = {
  buttonName: string;
  onClick: () => void;
};
const Button = ({ buttonName, onClick }: Parameter) => {
  return <GeneralButton onClick={onClick}>{buttonName}</GeneralButton>;
};

export default Button;
