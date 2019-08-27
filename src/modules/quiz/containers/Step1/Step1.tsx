import React, { useState } from "react";
import { TextInput } from "../../../common-ui/TextInput";
import { SelectInput } from "../../../common-ui/SelectInput";
import { Button } from "../../../common-ui/Button";
import { Checkbox } from "../../../common-ui/Checkbox";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export type Profile = {
  height: string;
  weight: string;
  age: string;
  position: string;
};

export type Step1Props = {
  setStep: (nb: number) => void;
  profile: Profile;
  setProfile: (p: Profile) => void;
};

export const Step1 = ({ setStep, profile, setProfile }: Step1Props) => {
  const [t] = useTranslation();

  const [formErrors, setFormErrors] = useState({
    height: "",
    weight: "",
    age: "",
    position: "",
    checked: ""
  });
  const [checked, setChecked] = useState(false);

  const submit = () => {
    if (formIsValid()) setStep(2);
  };

  const formIsValid = () => {
    const fe = {
      height: "",
      weight: "",
      age: "",
      position: "",
      checked: ""
    };
    let isValid = true;

    if (+profile.height <= 0) {
      fe.height = t("Entrez un chiffre supérieur à 0");
      isValid = false;
    }
    if (+profile.height > 250) {
      fe.height = t("Entrez un chiffre inférieur à", { x: "250" });
      isValid = false;
    }
    if (profile.height === "") {
      fe.height = t("Champs obligatoire");
      isValid = false;
    }
    if (+profile.weight <= 0) {
      fe.weight = t("Entrez un chiffre supérieur à 0");
      isValid = false;
    }
    if (+profile.weight > 500) {
      fe.weight = t("Entrez un chiffre inférieur à", { x: "500" });
      isValid = false;
    }
    if (profile.weight === "") {
      fe.weight = t("Champs obligatoire");
      isValid = false;
    }
    if (+profile.age <= 0) {
      fe.age = t("Entrez un chiffre supérieur à 0");
      isValid = false;
    }
    if (+profile.age > 150) {
      fe.age = t("Entrez un chiffre inférieur à", { x: "150" });
      isValid = false;
    }
    if (profile.age === "") {
      fe.age = t("Champs obligatoire");
      isValid = false;
    }
    if (profile.position === "") {
      fe.position = t("Champs obligatoire");
      isValid = false;
    }
    if (!checked) {
      fe.checked = t("Vous devez accepter les conditions");
      isValid = false;
    }
    setFormErrors(fe);
    return isValid;
  };

  return (
    <div>
      <div className={styles.text}>
        <div>{t("Découvre quel joueur du Top 100 de FIFA 20 tu es")}</div>
        <div>{t("Pour commencer, remplis ces quelques informations")}</div>
      </div>
      <img
        src={require("../../../../assets/img/Step1.svg")}
        alt="logo"
        className={styles.stepIcon}
      />
      <TextInput
        value={profile.height}
        onChange={evt => setProfile({ ...profile, height: evt.target.value })}
        placeholder={t("Taille (cm)")}
        invalid={formErrors.height !== ""}
        error={formErrors.height}
        type={"number"}
      />
      <TextInput
        value={profile.weight}
        onChange={evt => setProfile({ ...profile, weight: evt.target.value })}
        placeholder={t("Poids (kg)")}
        invalid={formErrors.weight !== ""}
        error={formErrors.weight}
        type={"number"}
      />
      <TextInput
        value={profile.age}
        onChange={evt => setProfile({ ...profile, age: evt.target.value })}
        placeholder={t("Age")}
        invalid={formErrors.age !== ""}
        error={formErrors.age}
        type={"number"}
      />
      <SelectInput
        options={[
          { value: "gk", label: t("Gardien") },
          { value: "str", label: t("Attaquant") },
          { value: "def", label: t("Défenseur") },
          { value: "mid", label: t("Milieu") }
        ]}
        selectOption={profile.position}
        onChange={option => setProfile({ ...profile, position: option })}
        invalid={formErrors.position !== ""}
        error={formErrors.position}
      />
      <div className={styles.conditions} onClick={() => setChecked(!checked)}>
        <Checkbox
          onChange={() => setChecked(!checked)}
          checked={checked}
          color={"#fff"}
        />
        {t(
          "Je suis d'accord que ces données sont utilisées pour calculer les résultats du quiz"
        )}
      </div>
      <div className={styles.error}>
        {formErrors.checked !== "" && (
          <img
            src={require("../../../../assets/img/Attention.svg")}
            alt="logo"
            className={styles.attention}
          />
        )}
        {formErrors.checked}
      </div>
      <Button
        description={t("Suivant").toUpperCase()}
        onClick={() => submit()}
      />
    </div>
  );
};
