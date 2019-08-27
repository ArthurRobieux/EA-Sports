import React from "react";
import styles from "./styles.module.scss";
import { Title } from "../../../common-ui";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [t] = useTranslation();
  return (
    <>
      <div className={styles.logoContainer}>
        <img
          src={require("../../../../assets/img/HeaderPlayers.png")}
          className={styles.logo}
          alt="logo"
        />
      </div>
      <Title>{t("Quel joueur du TOP 100 es-tu ?").toUpperCase()}</Title>
    </>
  );
};
