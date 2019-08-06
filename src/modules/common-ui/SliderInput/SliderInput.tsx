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
    <div className={styles.sliderContainer}>
      <div className={styles.description}>{description}</div>
      <div className={styles.sliderInput}>
        <input
          className={styles.slider}
          type="range"
          min="0"
          max="99"
          value={value}
          onChange={evt => onChange(evt.target.value)}
          style={{
            background: `linear-gradient(to right, #F93B78 0%, #F93B78 ${value}%, #0d3473 ${value}%, #0d3473 100%)`
          }}
        />
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
};
