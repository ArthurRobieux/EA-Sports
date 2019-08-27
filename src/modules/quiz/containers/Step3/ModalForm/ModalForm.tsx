import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "../../../../common-ui/Button";
import { TextInput } from "../../../../common-ui/TextInput";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../../../../common-ui/Checkbox";

export type ModalFormProps = {
  setModalIsOpen: (b: boolean) => void;
};

export const ModalForm = ({ setModalIsOpen }: ModalFormProps) => {
  const [t] = useTranslation();
  const [form, setForm] = useState({ email: "" });
  const [formErrors, setFormErrors] = useState({ email: "" });
  const [checked, setChecked] = useState(false);

  const submit = () => {
    const emailFormat = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,30}\.[a-z]{2,4}$/;
    const fe = { email: "" };
    let isValid = true;
    if (form.email === "") {
      fe.email = t("Champs obligatoire");
      isValid = false;
    }
    if (form.email !== "" && !emailFormat.test(form.email)) {
      fe.email = t("Mauvais format");
      isValid = false;
    }
    setFormErrors(fe);
    if (isValid) {
      setModalIsOpen(false);
    }
  };

  return (
    <div className={styles.content}>
      <img
        src={require("../../../../../assets/img/PlayersWithLogo.png")}
        className={styles.players}
      />
      <div className={styles.title}>
        {t("Inscris-toi au tirage au sort et tente de gagner un jeu FIFA 20")}
      </div>
      <TextInput
        value={form.email}
        onChange={evt => setForm({ ...form, email: evt.target.value })}
        placeholder={t("Email")}
        invalid={formErrors.email !== ""}
        error={formErrors.email}
        type={"text"}
      />
      <div className={styles.conditions} onClick={() => setChecked(!checked)}>
        <Checkbox
          onChange={() => setChecked(!checked)}
          checked={checked}
          color={"#fff"}
        />
        {t(
          "J'accepte que mon adresse email soit utilisée pour le tirage au sort de ce jeu-concours"
        )}
      </div>
      <div className={styles.informations}>
        <img
          src={require("../../../../../assets/img/Information.svg")}
          className={styles.infoIcon}
        />
        {t(
          "Attention, tu dois partager le résultat sur les réseaux sociaux pour avoir une chance de gagner ton jeu FIFA 20"
        )}
      </div>
      <Button
        description={t("Je m'inscris").toUpperCase()}
        onClick={() => submit()}
        disabled={!checked}
      />
    </div>
  );
};
