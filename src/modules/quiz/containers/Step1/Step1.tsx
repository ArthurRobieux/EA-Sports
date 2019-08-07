import React, { useState } from "react";
import { TextInput } from "../../../common-ui/TextInput";
import { SelectInput } from "../../../common-ui/SelectInput";
import { Button } from "../../../common-ui/Button";
import { Checkbox } from "../../../common-ui/Checkbox";
import styles from "./styles.module.scss";

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
    if (profile.height === "") {
      fe.height = "Champs obligatoire";
      isValid = false;
    }
    if (profile.weight === "") {
      fe.weight = "Champs obligatoire";
      isValid = false;
    }
    if (profile.age === "") {
      fe.age = "Champs obligatoire";
      isValid = false;
    }
    if (profile.position === "") {
      fe.position = "Champs obligatoire";
      isValid = false;
    }
    if (!checked) {
      fe.checked = "Vous devez accepter les conditions";
      isValid = false;
    }
    setFormErrors(fe);
    return isValid;
  };

  return (
    <div>
      <TextInput
        value={profile.height}
        onChange={evt => setProfile({ ...profile, height: evt.target.value })}
        placeholder={"Taille"}
        invalid={formErrors.height !== ""}
        error={formErrors.height}
        type={"number"}
      />
      <TextInput
        value={profile.weight}
        onChange={evt => setProfile({ ...profile, weight: evt.target.value })}
        placeholder={"Poids"}
        invalid={formErrors.weight !== ""}
        error={formErrors.weight}
        type={"number"}
      />
      <TextInput
        value={profile.age}
        onChange={evt => setProfile({ ...profile, age: evt.target.value })}
        placeholder={"Age"}
        invalid={formErrors.age !== ""}
        error={formErrors.age}
        type={"number"}
      />
      <SelectInput
        options={[
          { value: "gk", label: "Gardien" },
          { value: "str", label: "Attaquant" },
          { value: "def", label: "Défenseur" },
          { value: "mid", label: "Milieu" }
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
          color={"#f93b78"}
        />
        J'accepte les conditions
      </div>
      <div className={styles.error}>{formErrors.checked}</div>
      <Button description="Next" onClick={() => submit()} />
    </div>
  );
};
