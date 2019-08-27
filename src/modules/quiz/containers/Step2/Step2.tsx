import React, { useState, useEffect } from "react";
import { SliderInput } from "../../../common-ui/SliderInput";
import { Button } from "../../../common-ui/Button";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation();
  const [total, setTotal] = useState(
    +stats.pace +
      +stats.shooting +
      +stats.passing +
      +stats.dribbling +
      +stats.defending +
      +stats.physical
  );

  useEffect(() => {
    setTotal(
      +stats.pace +
        +stats.shooting +
        +stats.passing +
        +stats.dribbling +
        +stats.defending +
        +stats.physical
    );
  }, [stats]);

  const submit = () => {
    if (total >= 300 && total <= 450) {
      setStep(3);
    }
  };

  return (
    <div>
      <div className={styles.text}>
        <div>{t("Maintenant, attribue-toi les 6 notes FIFA")}</div>
        <div>
          {t("Tu as réparti X points Il te reste Y points à répartir", {
            x: total,
            y: 450 - total > 0 ? 450 - total : 0
          })}
        </div>
      </div>
      <img
        src={require("../../../../assets/img/Step2.svg")}
        alt="logo"
        className={styles.stepIcon}
      />
      <div className={styles.sliders}>
        <SliderInput
          description={t("Vitesse")}
          value={stats.pace}
          onChange={value => setStats({ ...stats, pace: value })}
        />
        <SliderInput
          description={t("Tir")}
          value={stats.shooting}
          onChange={value => setStats({ ...stats, shooting: value })}
        />
        <SliderInput
          description={t("Passe")}
          value={stats.passing}
          onChange={value => setStats({ ...stats, passing: value })}
        />
        <SliderInput
          description={t("Dribble")}
          value={stats.dribbling}
          onChange={value => setStats({ ...stats, dribbling: value })}
        />
        <SliderInput
          description={t("Défense")}
          value={stats.defending}
          onChange={value => setStats({ ...stats, defending: value })}
        />
        <SliderInput
          description={t("Physique")}
          value={stats.physical}
          onChange={value => setStats({ ...stats, physical: value })}
        />
      </div>
      <div className={styles.error}>
        {(total < 300 || total > 450) && (
          <img
            src={require("../../../../assets/img/Attention.svg")}
            alt="logo"
            className={styles.attention}
          />
        )}
        {total < 300 && t("Il vous faut au minimum 300 points")}
        {total > 450 && t("Il vous faut au maximum 450 points")}
      </div>
      <Button
        description={t("Voir les résultats")}
        onClick={() => submit()}
        disabled={total < 300 || total > 450}
      />
    </div>
  );
};
