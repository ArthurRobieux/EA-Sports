import React from "react";

import styles from "./styles.module.scss";

export type SliderInputProps = {
  description: string;
  onChange: (nb: string) => void;
  value: string;
};

export const SliderInput = ({
  description,
  onChange,
  value
}: SliderInputProps) => {
  return (
    <div className={styles.slider}>
      <div className={styles.description}>{description}</div>
      <input
        className={styles.sliderInput}
        type="range"
        min="0"
        max="99"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};
