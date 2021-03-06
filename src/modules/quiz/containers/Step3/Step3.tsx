import React, { useState, useEffect } from "react";
import { players } from "../../../../assets/fifaData";
import { Loader } from "../../../common-ui";
import { Modal } from "../../../common-ui/Modal";
import { Button } from "../../../common-ui/Button";
import { ModalForm } from "./ModalForm";
import { SharingButtons } from "./SharingButtons";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

export type Profile = {
  height: string;
  weight: string;
  age: string;
  position: string;
};

export type Stats = {
  pace: string;
  shooting: string;
  passing: string;
  dribbling: string;
  defending: string;
  physical: string;
};

export type Step3Props = {
  profile: Profile;
  stats: Stats;
};

export const Step3 = ({ profile, stats }: Step3Props) => {
  const [t] = useTranslation();
  const [topPlayers, setTopPlayers] = useState({
    "1": {},
    "2": {},
    "3": {}
  } as any);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [shareIsActive, setShareIsActive] = useState(false);

  useEffect(() => {
    const playersWithScore = [] as any[];
    players.map(player => {
      let score = 1000;
      score = score - Math.abs(player.PACE - +stats.pace);
      score = score - Math.abs(player.SHOOTING - +stats.shooting);
      score = score - Math.abs(player.PASSING - +stats.passing);
      score = score - Math.abs(player.DRIBBLING - +stats.dribbling);
      score = score - Math.abs(player.DEFENDING - +stats.defending);
      score = score - Math.abs(player.PHYSICAL - +stats.physical);
      score = score - Math.abs(player.AGE - +profile.age) * 3;
      score = score - Math.abs(player.HEIGHT - +profile.height) * 3;

      if (player.POSTE === profile.position) {
        playersWithScore.push({ p: player, score: score });
      }
    });

    playersWithScore.sort(function(a, b) {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    });

    setTopPlayers({
      "1": playersWithScore[0].p,
      "2": playersWithScore[1].p,
      "3": playersWithScore[2].p
    });

    if (/(lenaic)/.test(window.location.href)) {
      setTopPlayers({
        "1": players.find(p => p["COMMON NAME"] === "Cristiano Ronaldo"),
        "2": players.find(p => p["COMMON NAME"] === "Cristiano Ronaldo"),
        "3": players.find(p => p["COMMON NAME"] === "Cristiano Ronaldo")
      });
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.step3}>
      <div className={styles.title}>{t("Félicitation !")}</div>
      <div className={styles.subTitle}>
        {t("Tu es X C'est un super joueur", {
          x: `${topPlayers["1"]["FIRST NAME"]} ${topPlayers["1"]["LAST NAME"]}`
        })}
      </div>
      <div className={styles.playerCards}>
        <img
          className={styles.leftPlayerCard}
          src={require(`../../../../assets/img/${topPlayers["2"]["card_url"]}`)}
          alt="player"
        />
        <img
          className={styles.centerPlayerCard}
          src={require(`../../../../assets/img/${topPlayers["1"]["card_url"]}`)}
          alt="player"
        />
        <img
          className={styles.rightPlayerCard}
          src={require(`../../../../assets/img/${topPlayers["3"]["card_url"]}`)}
          alt="player"
        />
      </div>
      <div
        className={
          shareIsActive
            ? styles.sharingButtonsActive
            : styles.sharingButtonsInactive
        }
      >
        <SharingButtons
          sharedMessage={`Je suis ${topPlayers["1"]["FIRST NAME"]} ${topPlayers["1"]["LAST NAME"]} dans FIFA20.`}
        />
      </div>
      <div className={styles.button}>
        <Button
          description={t("Partager").toUpperCase()}
          onClick={() => setShareIsActive(true)}
          yellow
        />
      </div>
      <div className={styles.button}>
        <Button
          description={t("Participer au concours").toUpperCase()}
          onClick={() => setModalIsOpen(true)}
        />
      </div>
      <div className={styles.button}>
        <Button
          description={t("Voir le classement").toUpperCase()}
          onClick={() =>
            (window.location.href =
              "https://www.ea.com/fr-fr/games/fifa/fifa-20")
          }
        />
      </div>
      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        <ModalForm setModalIsOpen={setModalIsOpen} />
      </Modal>
    </div>
  );
};
