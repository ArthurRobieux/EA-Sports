import React, { useState } from "react";
import { SliderInput } from "../../../common-ui/SliderInput";
import { Button } from "../../../common-ui/Button";
import styles from "./styles.module.scss";

export type Stats = {
  pace: string;
  shooting: string;
  passing: string;
  dribbling: string;
  defending: string;
  physical: string;
};

export type Step2Props = {
  setStep: (nb: number) => void;
  stats: Stats;
  setStats: (p: Stats) => void;
};

export const Step2 = ({ setStep, stats, setStats }: Step2Props) => {
  const [error, setError] = useState("");
  const submit = () => {
    const total =
      +stats.pace +
      +stats.shooting +
      +stats.passing +
      +stats.dribbling +
      +stats.defending +
      +stats.physical;
    if (total < 300) {
      setError("Il vous faut au minimum 300points");
    } else if (total > 450) {
      setError("Il vous faut au maximum 450points");
    } else {
      setStep(3);
    }
  };
  return (
    <div>
      <img
        src={require("../../../../assets/img/Step2.svg")}
        alt="logo"
        className={styles.stepIcon}
      />
      <SliderInput
        description="Pace"
        value={stats.pace}
        onChange={value => setStats({ ...stats, pace: value })}
      />
      <SliderInput
        description="Shooting"
        value={stats.shooting}
        onChange={value => setStats({ ...stats, shooting: value })}
      />
      <SliderInput
        description="Passing"
        value={stats.passing}
        onChange={value => setStats({ ...stats, passing: value })}
      />
      <SliderInput
        description="Dribbling"
        value={stats.dribbling}
        onChange={value => setStats({ ...stats, dribbling: value })}
      />
      <SliderInput
        description="Defending"
        value={stats.defending}
        onChange={value => setStats({ ...stats, defending: value })}
      />
      <SliderInput
        description="Physical"
        value={stats.physical}
        onChange={value => setStats({ ...stats, physical: value })}
      />
      <div className={styles.error}>{error}</div>
      <Button description="Next" onClick={() => submit()} />
    </div>
  );
};
