import React from "react";
import { TextInput } from "../../../common-ui/TextInput";
import { SelectInput } from "../../../common-ui/SelectInput";
import { Button } from "../../../common-ui/Button";

export type Profile = {
  firstName: string;
  lastName: string;
  age: string;
  position: { value: string; label: string } | null;
};

export type Step1Props = {
  setStep: (nb: number) => void;
  profile: Profile;
  setProfile: (p: Profile) => void;
};

export const Step1 = ({ setStep, profile, setProfile }: Step1Props) => {
  return (
    <div>
      Step 1
      <TextInput
        value={profile.firstName}
        onChange={evt =>
          setProfile({ ...profile, firstName: evt.target.value })
        }
      />
      <TextInput
        value={profile.lastName}
        onChange={evt => setProfile({ ...profile, lastName: evt.target.value })}
      />
      <TextInput
        value={profile.age}
        onChange={evt => setProfile({ ...profile, age: evt.target.value })}
      />
      <SelectInput
        options={[
          { value: "att", label: "Attaque" },
          { value: "def", label: "Défenseur" },
          { value: "gkp", label: "Gardien" }
        ]}
        selectOption={profile.position}
        onChange={option => setProfile({ ...profile, position: option })}
      />
      <Button description="Next" onClick={() => setStep(2)} />
    </div>
  );
};
