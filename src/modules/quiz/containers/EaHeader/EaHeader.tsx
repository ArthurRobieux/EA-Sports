import React from "react";
import styles from "./styles.module.scss";

export const EaHeader = () => {
  return (
    <div className={styles.eaHeader}>
      <div className={styles.options}>
        <div>?</div>
        <div>O</div>
        <div>EA</div>
      </div>
    </div>
  );
};
