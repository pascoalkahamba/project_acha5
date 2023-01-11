import { GeneralButton } from "../MyStyles";

type Parameter = {
  buttonName: string;
  active?: boolean;
  onClick: () => void;
};
const Button = ({ buttonName, onClick, active }: Parameter) => {
  return (
    <GeneralButton onClick={onClick} disabled={active}>
      {buttonName}
    </GeneralButton>
  );
};

export default Button;
