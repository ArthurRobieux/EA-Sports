import React from "react";

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
      {console.log("PRO", profile)}
      <div>{profile.height}</div>
      <div>{profile.weight}</div>
      <div>{profile.age}</div>
      <div>{profile.position}</div>
      <div>{stats.att}</div>
      <div>{stats.def}</div>
      <div>{stats.vit}</div>
    </div>
  );
};
