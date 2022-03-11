import { useRef } from "react";
import styles from "src/assets/styles/NumberInput.module.css";
import { IMAGE_CONSTANT } from "src/utils/constants";

interface NumberInputProps {
  callback: (value: number) => void;
  defaultValue?: number;
}

const NumberInput = (props: NumberInputProps) => {
  const inputFieldRef = useRef<HTMLInputElement | null>(null);

  const handleClick = (type: "remove" | "add") => {
    if (!inputFieldRef.current) return;
    if (type === "remove") {
      inputFieldRef.current.stepDown();
    } else {
      inputFieldRef.current.stepUp();
    }
    const value = +inputFieldRef.current.value;
    props.callback(value);
  };

  return (
    <div className={styles.wrapper}>
      <img
        className="cursor-pointer"
        src={IMAGE_CONSTANT.minusIcon}
        alt="remove"
        onClick={() => handleClick("remove")}
      />
      <input
        ref={inputFieldRef}
        min={0}
        className={styles.numberInput}
        defaultValue={props.defaultValue || 0}
        type={"number"}
      />
      <img
        className="cursor-pointer"
        src={IMAGE_CONSTANT.plusIcon}
        alt="add"
        onClick={() => handleClick("add")}
      />
    </div>
  );
};
export default NumberInput;
