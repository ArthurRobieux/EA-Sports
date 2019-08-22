import React from "react";
import styles from "./styles.module.scss";

export const EaFooter = () => {
  return (
    <div className={styles.eaFooter}>
      EAFOOTER
      <div>
        <div onClick={() => (window.location.href = "/en/")}>en</div>
        <div onClick={() => (window.location.href = "/fr/")}>fr</div>
      </div>
    </div>
  );
};
