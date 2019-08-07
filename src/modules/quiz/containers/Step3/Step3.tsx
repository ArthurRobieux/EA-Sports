import React, { useState, useEffect } from "react";
import { players } from "../../../../assets/fifaData";
import { Loader } from "../../../common-ui";

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
  const [topPlayers, setTopPlayers] = useState({
    "1": {},
    "2": {},
    "3": {}
  } as any);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div>TOP 1 : {topPlayers["1"]["FIRST NAME"]}</div>
      {console.log(topPlayers["1"]["card_url"])}
      <img
        src={require(`../../../../assets/img/${topPlayers["1"]["card_url"]}`)}
        alt="player"
      />
      <div>TOP 2 : {topPlayers["2"]["FIRST NAME"]}</div>
      <div>TOP 3 : {topPlayers["3"]["FIRST NAME"]}</div>

      {/* <img
        src={require(`../../../../assets/img/${p["card_url"]}`)}
        alt="player"
      /> */}
    </div>
  );
};
