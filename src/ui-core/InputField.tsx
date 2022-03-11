import React, { forwardRef } from "react";
import styles from "src/assets/styles/InputField.module.css";

interface InputFieldProps {
  defaultValue?: string | number | readonly string[];
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
}

const InputField = forwardRef(
  (props: InputFieldProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className={styles.inputFieldWrapper}>
        <label className={styles.inputLabel}>{props.label}</label>
        <input
          className={styles.inputField}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder || "Enter text input"}
          onChange={props.onChange}
          ref={ref}
          type={props.type}
          value={props.value}
        />
      </div>
    );
  }
);

export default InputField;
