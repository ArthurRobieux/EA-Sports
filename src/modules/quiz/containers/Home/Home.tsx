import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../../../common-ui";

import { Step1 } from "../Step1";
import { Step2 } from "../Step2";
import { Step3 } from "../Step3";

import { Header } from "../Header";

export type Profile = {
  height: string;
  weight: string;
  age: string;
  position: string;
};

export type Stats = {
  pace: string;
  shooting: string;
  passing: string;
  dribbling: string;
  defending: string;
  physical: string;
};

export const Home = () => {
  const [t] = useTranslation();
  const [step, setStep] = useState(1);

  const [profile, setProfile] = useState({
    height: "",
    weight: "",
    age: "",
    position: ""
  } as Profile);

  const [stats, setStats] = useState({
    pace: "50",
    shooting: "50",
    passing: "50",
    dribbling: "50",
    defending: "50",
    physical: "50"
  } as Stats);

  return (
    <>
      <Header />
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
