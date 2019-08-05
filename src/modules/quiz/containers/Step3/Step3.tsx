import React from "react";

export type Profile = {
  firstName: string;
  lastName: string;
  age: string;
  position: { value: string; label: string } | null;
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
      <div>Step 3</div>
      <div>{profile.firstName}</div>
      <div>{profile.lastName}</div>
      <div>{profile.age}</div>
      <div>{profile.position && profile.position.label}</div>
      <div>{stats.att}</div>
      <div>{stats.def}</div>
      <div>{stats.vit}</div>
    </div>
  );
};
