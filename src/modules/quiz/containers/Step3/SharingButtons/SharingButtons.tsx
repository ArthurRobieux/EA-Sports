import React from "react";
import styles from "./styles.module.scss";

export type SharingButtonsProps = {
  sharedMessage: string;
};

export const SharingButtons = ({ sharedMessage }: SharingButtonsProps) => {
  const sharedUrl = "www.google.fr";

  return (
    <div className={styles.buttons}>
      <a
        target="popup"
        onClick={() => {
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${sharedUrl}&quote=${sharedMessage}`,
            "popup",
            "width=600,height=600"
          );
          return false;
        }}
      >
        <img
          src={require("../../../../../assets/img/LogoFacebook.svg")}
          alt="logo"
          className={styles.logo}
        />
      </a>

      <a
        target="popup"
        onClick={() => {
          window.open(
            `https://twitter.com/share?url=${sharedUrl}&amp;text=${sharedMessage}&amp;hashtags=QuizFifa19`,
            "popup",
            "width=600,height=600"
          );
          return false;
        }}
      >
        <img
          src={require("../../../../../assets/img/LogoTwitter.svg")}
          alt="logo"
          className={styles.logo}
        />
      </a>

      <a
        target="popup"
        onClick={() => {
          window.open(
            `https://api.whatsapp.com/send?text=${sharedMessage}%20${sharedUrl}`,
            "popup",
            "width=600,height=600"
          );
          return false;
        }}
      >
        <img
          src={require("../../../../../assets/img/LogoWhatsapp.svg")}
          alt="logo"
          className={styles.logo}
        />
      </a>
    </div>
  );
};
