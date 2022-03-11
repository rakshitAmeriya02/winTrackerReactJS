import React, { useState } from "react";
import { winnerObject } from "src/containers/Home";
import { extractJSON, saveJSON } from "src/services/localStorage";
import Button from "src/ui-core/Button";
import NumberInput from "src/ui-core/NumberInput";
import { LOCAL_STORAGE_KEYS } from "src/utils/enums";
import styles from "src/assets/styles/Home.module.css";

const StepTwo = () => {
  const [winnerData, setWinnerData] = useState<winnerObject>(() =>
    extractJSON(LOCAL_STORAGE_KEYS.WT_DATA)
  );

  const handleValueChange = (player: "first" | "second", wins: number) => {
    const newValues = { ...winnerData };
    if (player === "first") newValues.firstPlayerWins = wins;
    else newValues.secondPlayerWins = wins;
    setWinnerData(newValues);
  };

  const currentWinner = () => {
    if (winnerData.firstPlayerWins === winnerData.secondPlayerWins) {
      return "Tie";
    } else if (winnerData.firstPlayerWins > winnerData.secondPlayerWins) {
      return winnerData.firstPlayer;
    } else {
      return winnerData.secondPlayer;
    }
  };

  const handleSave = () => saveJSON(LOCAL_STORAGE_KEYS.WT_DATA, winnerData);

  return (
    <React.Fragment>
      <div className={styles.block}>
        <div className={styles.headerText}>
          <label className={styles.inputLabel}>{winnerData.firstPlayer}</label>
        </div>
        <div className={styles.winBlock}>
          <label>Wins</label>
          <NumberInput
            defaultValue={winnerData.firstPlayerWins}
            callback={(wins) => handleValueChange("first", wins)}
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.headerText}>
          <label className={styles.inputLabel}>{winnerData.secondPlayer}</label>
        </div>
        <div className={styles.winBlock}>
          <label>Wins</label>
          <NumberInput
            defaultValue={winnerData.secondPlayerWins}
            callback={(wins) => handleValueChange("second", wins)}
          />
        </div>
      </div>
      <div className={styles.resultsBlock}>
        <p>
          <span>Current Winner:</span>
          <span className="bold">{currentWinner()}</span>
        </p>
        <p>
          <span>Win difference:</span>
          <span className="bold">
            {Math.abs(winnerData.firstPlayerWins - winnerData.secondPlayerWins)}
          </span>
        </p>
      </div>
      <Button onClick={handleSave}>Save</Button>
    </React.Fragment>
  );
};

export default StepTwo;
