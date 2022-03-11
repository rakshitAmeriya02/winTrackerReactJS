import React from "react";
import styles from "src/assets/styles/Button.module.css";

interface CustomButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      className={styles.customButton}
      disabled={props.disabled}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </button>
  );
};
export default CustomButton;
