import React from "react";
import { players } from "../../../../assets/fifaData";

export type Profile = {
  height: string;
  weight: string;
  age: string;
  position: string;
};

export type Stats = {
  att: string;
  def: string;
  vit: string;
};

export type Step3Props = {
  profile: Profile;
  stats: Stats;
};

export const Step3 = ({ profile, stats }: Step3Props) => {
  return (
    <div>
      JOUEUR
      <div>{profile.height}</div>
      <div>{profile.weight}</div>
      <div>{profile.age}</div>
      <div>{profile.position}</div>
      <div>{stats.att}</div>
      <div>{stats.def}</div>
      <div>{stats.vit}</div>
      DATA
      {players.map(
        p =>
          p["FIRST NAME"] === "Lionel" && (
            <div>
              {p["FIRST NAME"]} {p["LAST NAME"]}
              <img
                src={require(`../../../../assets/img/${p["card_url"]}`)}
                alt="player"
              />
            </div>
          )
      )}
    </div>
  );
};
