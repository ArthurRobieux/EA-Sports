import React from "react";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src={require("../../../../assets/img/LogoEASports.png")}
        className={styles.logo}
        alt="logo"
      />
    </div>
  );
};
