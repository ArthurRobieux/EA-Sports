import React, { useState } from "react";
// import styles from "./styles.module.scss";
import { Button } from "../../../../common-ui/Button";
import { TextInput } from "../../../../common-ui/TextInput";
import { useTranslation } from "react-i18next";

export type ModalFormProps = {
  setModalIsOpen: (b: boolean) => void;
};

export const ModalForm = ({ setModalIsOpen }: ModalFormProps) => {
  const [t] = useTranslation();
  const [form, setForm] = useState({ email: "" });
  const [formErrors, setFormErrors] = useState({ email: "" });

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
    <div>
      <TextInput
        value={form.email}
        onChange={evt => setForm({ ...form, email: evt.target.value })}
        placeholder={t("Email")}
        invalid={formErrors.email !== ""}
        error={formErrors.email}
        type={"text"}
      />
      <Button description={t("Envoyer")} onClick={() => submit()} />
      <Button description={t("Annuler")} onClick={() => setModalIsOpen(false)} />
    </div>
  );
};
