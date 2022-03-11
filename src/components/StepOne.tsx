import React, { useRef } from "react";
import { saveJSON } from "src/services/localStorage";
import Button from "src/ui-core/Button";
import InputField from "src/ui-core/InputField";
import { LOCAL_STORAGE_KEYS } from "src/utils/enums";

interface StepOneProps {
  goToStepTwo: () => void;
}

const StepOne = ({ goToStepTwo }: StepOneProps) => {
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const secondInputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = () => {
    if (firstInputRef.current?.value && secondInputRef.current?.value) {
      const firstPlayer = firstInputRef.current?.value;
      const secondPlayer = secondInputRef.current?.value;
      const id = new Date().valueOf();
      const data = {
        id,
        firstPlayer,
        secondPlayer,
        firstPlayerWins: 0,
        secondPlayerWins: 0,
      };
      saveJSON(LOCAL_STORAGE_KEYS.WT_DATA, data);
      goToStepTwo();
    }
  };
  return (
    <React.Fragment>
      <InputField
        ref={firstInputRef}
        label="Player 1 Name"
        placeholder="e.g., Tony Stark"
      />
      <InputField
        ref={secondInputRef}
        label="Player 2 Name"
        placeholder="e.g., Steve Rogers"
      />
      <Button onClick={handleSubmit}>Continue</Button>
    </React.Fragment>
  );
};

export default StepOne;
