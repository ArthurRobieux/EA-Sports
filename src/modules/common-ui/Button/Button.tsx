import React from "react";

import styles from "./styles.module.scss";
import classnames from "classnames";

export type ButtonProps = {
  description: string;
  disabled?: boolean;
  onClick: () => void;
  yellow?: boolean;
};

export const Button = ({
  description,
  disabled,
  onClick,
  yellow
}: ButtonProps) => {
  return (
    <div
      className={classnames(styles.button, {
        [styles.disabled]: disabled,
        [styles.yellow]: yellow
      })}
      onClick={() => onClick()}
    >
      {description}
    </div>
  );
};
