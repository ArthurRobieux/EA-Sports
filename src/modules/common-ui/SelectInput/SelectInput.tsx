import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type SelectInputOption = { label: any; value: string };

export type SelectInputProps = {
  options: SelectInputOption[];
  onChange: (value: string) => void;
  selectOption: string;
  invalid?: boolean;
  error?: string;
};

export const SelectInput = ({
  options,
  onChange,
  selectOption,
  invalid,
  error
}: SelectInputProps) => {
  return (
    <div className={styles.selectInputContainer}>
      <select
        className={classNames(styles.selectInput, {
          [styles.invalid]: invalid,
          [styles.placeholder]: selectOption === ""
        })}
        value={selectOption}
        onChange={evt => onChange(evt.target.value)}
      >
        <option value={""} key={""} disabled selected hidden>
          Position
        </option>
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error !== "" && (
        <div className={styles.error}>
          <img
            src={require("../../../assets/img/Attention.svg")}
            alt="logo"
            className={styles.attention}
          />
          {error}
        </div>
      )}
    </div>
  );
};
