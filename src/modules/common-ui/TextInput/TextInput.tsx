import React, { ChangeEventHandler, FocusEventHandler } from "react";

import classNames from "classnames";

import styles from "./styles.module.scss";

export type TextInputProps = {
  className?: string;
  value?: string;
  type?: string;
  invalid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
};

export const TextInput = ({
  className,
  value = "",
  type = "text",
  invalid = false,
  disabled,
  placeholder,
  onBlur,
  onFocus,
  onChange
}: TextInputProps) => (
  <>
    <input
      className={classNames(className, styles.textInput, {
        [styles.disabled]: disabled,
        [styles.invalid]: invalid
      })}
      type={type}
      disabled={disabled}
      placeholder={!disabled ? placeholder : ""}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
    />
  </>
);
