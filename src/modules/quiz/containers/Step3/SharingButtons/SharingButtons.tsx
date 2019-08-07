import React from "react";
// import styles from "./styles.module.scss";

export type SharingButtonsProps = {
  sharedMessage: string;
};

export const SharingButtons = ({ sharedMessage }: SharingButtonsProps) => {
  const sharedUrl = "www.google.fr";

  return (
    <div>
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
        FB
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
        TWITTER
      </a>

      <a
        target="popup"
        onClick={() => {
          window.open(
            `https://plus.google.com/share?url=${sharedUrl}&amp;text=${sharedMessage}`,
            "popup",
            "width=600,height=600"
          );
          return false;
        }}
      >
        GOOGLE
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
        WA
      </a>
    </div>
  );
};
