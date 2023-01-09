import React from "react";
import styles from "./Input.module.css";
import { Input } from "../MyStyles";
type Parameters = {
  title: string;
  label: string;
};

const NormalInput = ({ title, label }: Parameters) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (
    event
  ) => {
    console.log(event.target.value);
  };
  return (
    <form className={styles.input}>
      <label htmlFor="name">{label}</label>
      <Input type={title}></Input>
    </form>
  );
};

export default NormalInput;
