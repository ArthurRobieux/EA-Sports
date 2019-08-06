import React from "react";
import classNames from "classnames";
import { css } from "emotion";

import styles from "./styles.module.scss";

export type CheckboxProps<T> = {
  onChange: (checked: boolean, value?: T) => void;
  checked: boolean;
  value?: T;
  color?: string;
};

export const Checkbox = ({
  onChange,
  checked,
  value,
  color
}: CheckboxProps<any>) => {
  const checkboxActiveStyle = css`
    &:before {
      background: ${color};
      border: 0;
    }
  `;

  return (
    <span
      className={classNames(
        styles.checkbox,
        { [styles.checkboxActive]: checked },
        { [checkboxActiveStyle]: checked && color }
      )}
    >
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        onClick={() => {
          onChange(!checked, value);
        }}
      />
    </span>
  );
};
