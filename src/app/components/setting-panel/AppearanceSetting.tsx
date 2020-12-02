import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

import RangeInput from "./RangeInput";
import SettingSection from "./SettingSection";
import ToggleInput from "./ToggleInput";
import { ConfigContext } from "../../stores/context";

interface AppearanceSettingProps {}

const AppearanceSetting: FC<AppearanceSettingProps> = observer(
  (props): ReactElement => {
    const classes = useStyle();

    const configStore = useContext(ConfigContext);

    return (
      <SettingSection subject="Appearance">
        <>
          <ToggleInput
            label="Dark Mode:"
            on={configStore.darkMode}
            onToggle={action((value: any) => configStore.setDarkMode(value))}
          />
          <RangeInput
            label="Transparency:"
            max={1}
            min={0.2}
            step={0.05}
            value={configStore.transparency}
            onChange={action((value: number) =>
              configStore.setTransparency(value)
            )}
          />
        </>
      </SettingSection>
    );
  }
);

const useStyle = createUseStyles({
  container: {},
  settingBlock: {},
});

export default AppearanceSetting;
