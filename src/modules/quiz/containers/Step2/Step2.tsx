import React from "react";
import { SliderInput } from "../../../common-ui/SliderInput";
import { Button } from "../../../common-ui/Button";

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
  return (
    <div>
      Step 2
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
      <Button description="Next" onClick={() => setStep(3)} />
    </div>
  );
};
