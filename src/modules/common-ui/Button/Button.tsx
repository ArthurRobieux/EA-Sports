import React from "react";

import styles from "./styles.module.scss";
import classnames from "classnames";

export type ButtonProps = {
  description: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({ description, disabled, onClick }: ButtonProps) => {
  return (
    <div
      className={classnames(styles.button, {
        [styles.disabled]: disabled
      })}
      onClick={() => onClick()}
    >
      {description}
    </div>
  );
};
