import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import RangeInput from "./RangeInput";
import SettingSection from "./SettingSection";
import ToggleInput from "./ToggleInput";

interface AppearanceSettingProps {}

const AppearanceSetting: FC<AppearanceSettingProps> = (props): ReactElement => {
  const classes = useStyle();

  const [transparency, setTransparency] = useState(0.2);

  const handleChangeTransparency = (value: number) => {
    setTransparency(value);
  };

  return (
    <SettingSection subject="Appearance">
      <>
        <ToggleInput label="Dark Mode:" />
        <RangeInput
          label="Transparency:"
          max={1}
          min={0.2}
          step={0.05}
          value={transparency}
          onChange={handleChangeTransparency}
        />
      </>
    </SettingSection>
  );
};

const useStyle = createUseStyles({
  container: {},
  settingBlock: {},
});

export default AppearanceSetting;
