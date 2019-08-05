import React from "react";

import styles from "./styles.module.scss";

export type ButtonProps = {
  description: string;
  onClick: () => void;
};

export const Button = ({ description, onClick }: ButtonProps) => {
  return (
    <div className={styles.button} onClick={() => onClick()}>
      {description}
    </div>
  );
};
