import React, { FC, ReactElement, useContext } from "react";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

import RangeInput from "./RangeInput";
import SettingSection from "./SettingSection";
import ToggleInput from "./ToggleInput";
import { ConfigContext, GlobalStateContext } from "../../stores/context";

interface AppearanceSettingProps {}

const AppearanceSetting: FC<AppearanceSettingProps> = observer(
  (props): ReactElement => {
    const configStore = useContext(ConfigContext);
    const globalStateStore = useContext(GlobalStateContext);

    return (
      <SettingSection subject="Appearance">
        <>
          <ToggleInput
            label="Dark Mode:"
            on={globalStateStore.darkMode}
            onToggle={action(() => globalStateStore.toggleDarkMode())}
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

export default AppearanceSetting;
