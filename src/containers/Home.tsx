import { useState } from "react";
import { extractJSON } from "src/services/localStorage";
import styles from "src/assets/styles/Home.module.css";
import { LOCAL_STORAGE_KEYS } from "src/utils/enums";
import StepOne from "src/components/StepOne";
import StepTwo from "src/components/StepTwo";

export interface winnerObject {
  id: number;
  firstPlayer: string;
  secondPlayer: string;
  firstPlayerWins: number;
  secondPlayerWins: number;
}

const Home = () => {
  const [step, setStep] = useState(() => {
    const winnerData: winnerObject = extractJSON(LOCAL_STORAGE_KEYS.WT_DATA);
    return winnerData.id ? 2 : 1;
  });

  const renderContent = () => {
    switch (step) {
      case 1:
        return <StepOne goToStepTwo={() => setStep(2)} />;
      case 2:
        return <StepTwo />;
      default:
        return <StepOne goToStepTwo={() => setStep(2)} />;
    }
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.homeContainer}>{renderContent()}</div>
    </div>
  );
};

export default Home;
