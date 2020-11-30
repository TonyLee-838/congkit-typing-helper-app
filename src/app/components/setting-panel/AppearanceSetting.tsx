import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import RangeInput from "./RangeInput";
import SettingSection from "./SettingSection";
import ToggleInput from "./ToggleInput";

interface AppearanceSettingProps {}

const AppearanceSetting: FC<AppearanceSettingProps> = (props): ReactElement => {
  const classes = useStyle();
  return (
    <SettingSection subject="Appearance">
      <>
        <ToggleInput label="Transparency:" />
        <ToggleInput label="Transparency:" />
        <RangeInput label="Transparency:" max={1} min={0.2} />
        <RangeInput label="Transparency:" max={1} min={0.2} />
      </>
    </SettingSection>
  );
};

const useStyle = createUseStyles({
  container: {},
  settingBlock: {},
});

export default AppearanceSetting;
