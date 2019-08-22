import React from "react";
import styles from "./styles.module.scss";

export const FifaFooter = () => {
  return (
    <div className={styles.fifaFooter}>
      <div className={styles.top}>
        <div className={styles.localLinks}>
          <div>Title</div>
          <div>LocalLinks</div>
        </div>
        <div className={styles.socialLinks}>
          <div>Title</div>
          <div>SocialLinks</div>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>RatingsLinks</div>
    </div>
  );
};
