import React from "react";
type Parameter = {
  buttonName: string;
};
const Button = ({ buttonName }: Parameter) => {
  return <button>{buttonName}</button>;
};

export default Button;
