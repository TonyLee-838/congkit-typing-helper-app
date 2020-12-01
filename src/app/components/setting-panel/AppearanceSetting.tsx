import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import { getConfig, updateConfig } from "../../../db/api/config";
import RangeInput from "./RangeInput";
import SettingSection from "./SettingSection";
import ToggleInput from "./ToggleInput";

interface AppearanceSettingProps {}

const AppearanceSetting: FC<AppearanceSettingProps> = (props): ReactElement => {
  const classes = useStyle();

  const [transparency, setTransparency] = useState<number>(
    parseFloat(getConfig("appearance.transparency"))
  );

  const handleChangeTransparency = (value: number) => {
    updateConfig("appearance.transparency", value);
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
