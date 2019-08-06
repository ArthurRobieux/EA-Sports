import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../../common-ui";

import { Step1 } from "../Step1";
import { Step2 } from "../Step2";
import { Step3 } from "../Step3";

import styles from "./styles.module.scss";

export type Profile = {
  firstName: string;
  lastName: string;
  age: string;
  position: { value: string; label: string } | null;
};

export type Stats = {
  att: string;
  def: string;
  vit: string;
};

export const Home = () => {
  const [t] = useTranslation();
  const [step, setStep] = useState(1);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    position: { value: "att", label: "Attaquant" }
  } as Profile);

  const [stats, setStats] = useState({
    att: "50",
    def: "50",
    vit: "50"
  } as Stats);

  return (
    <>
      <img
        src={require("../../../../assets/img/LogoEASports.png")}
        className={styles.logo}
        alt="logo"
      />
      <Title>{t("Welcome")} - Quiz EA Sports</Title>
      {step === 1 && (
        <Step1 setStep={setStep} profile={profile} setProfile={setProfile} />
      )}
      {step === 2 && (
        <Step2 setStep={setStep} stats={stats} setStats={setStats} />
      )}
      {step === 3 && <Step3 stats={stats} profile={profile} />}
    </>
  );
};
