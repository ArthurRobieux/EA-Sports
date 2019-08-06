import React, { useState } from "react";
import { SliderInput } from "../../../common-ui/SliderInput";
import { Button } from "../../../common-ui/Button";
import styles from "./styles.module.scss";

export type Stats = {
  att: string;
  def: string;
  vit: string;
};

export type Step2Props = {
  setStep: (nb: number) => void;
  stats: Stats;
  setStats: (p: Stats) => void;
};

export const Step2 = ({ setStep, stats, setStats }: Step2Props) => {
  const [error, setError] = useState("");
  const submit = () => {
    if (+stats.att + +stats.def + +stats.vit < 100) {
      setError("Il vous faut au minimum 100points");
    } else if (+stats.att + +stats.def + +stats.vit > 250) {
      setError("Il vous faut au maximum 250points");
    } else {
      setStep(3);
    }
  };
  return (
    <div>
      <SliderInput
        description="Attaque"
        value={stats.att}
        onChange={value => setStats({ ...stats, att: value })}
      />
      <SliderInput
        description="Défense"
        value={stats.def}
        onChange={value => setStats({ ...stats, def: value })}
      />
      <SliderInput
        description="Vitesse"
        value={stats.vit}
        onChange={value => setStats({ ...stats, vit: value })}
      />
      <div className={styles.error}>{error}</div>
      <Button description="Next" onClick={() => submit()} />
    </div>
  );
};
