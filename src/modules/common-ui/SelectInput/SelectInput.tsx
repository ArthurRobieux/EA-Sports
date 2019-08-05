import React from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

export type SelectInputOption = { label: string; value: string };
export type ValueType = any;

export type SelectInputProps = {
  options: SelectInputOption[];
  onChange: (value: ValueType) => void;
  selectOption: ValueType;
};

export const SelectInput = ({
  options,
  onChange,
  selectOption
}: SelectInputProps) => {
  return (
    <select
      className={classNames(styles.selectInput)}
      value={selectOption ? selectOption.value : null}
      onChange={evt => onChange(evt.target.value)}
    >
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
