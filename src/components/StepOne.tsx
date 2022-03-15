import React, { useRef } from "react";
import { winnerObject } from "src/containers/Home";
import { clonseJSON, extractJSON, saveJSON } from "src/services/localStorage";
import Button from "src/ui-core/Button";
import InputField from "src/ui-core/InputField";
import { LOCAL_STORAGE_KEYS } from "src/utils/enums";

interface StepOneProps {
  goToStepTwo: () => void;
}

const StepOne = ({ goToStepTwo }: StepOneProps) => {
  const winnerData: winnerObject = clonseJSON(
    extractJSON(LOCAL_STORAGE_KEYS.WT_DATA)
  );
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
        firstPlayerWins: winnerData.firstPlayerWins || 0,
        secondPlayerWins: winnerData.secondPlayerWins || 0,
      };
      saveJSON(LOCAL_STORAGE_KEYS.WT_DATA, data);
      goToStepTwo();
    }
  };
  return (
    <React.Fragment>
      <InputField
        defaultValue={winnerData.firstPlayer}
        label="Player 1 Name"
        placeholder="e.g., Tony Stark"
        ref={firstInputRef}
      />
      <InputField
        defaultValue={winnerData.secondPlayer}
        label="Player 2 Name"
        placeholder="e.g., Steve Rogers"
        ref={secondInputRef}
      />
      <Button onClick={handleSubmit}>
        {winnerData ? "Update" : "Continue"}
      </Button>
    </React.Fragment>
  );
};

export default StepOne;
