import React from "react";
import styles from "./Input.module.css";
type Parameters = {
  title: string;
  label: string;
};

const Input = ({ title, label }: Parameters) => {
  return (
    <form className={styles.input}>
      <label htmlFor="name">{label}</label>
      <input type="text" placeholder={title} id="name" />
    </form>
  );
};

export default Input;
