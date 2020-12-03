import { observer } from "mobx-react-lite";
import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import SettingSection from "./SettingSection";
import ShortcutInput from "./ShortcutInput";

interface ShortcutSettingProps {}

const ShortcutSetting: FC<ShortcutSettingProps> = observer(
  (props): ReactElement => {
    const classes = useStyle();

    return (
      <SettingSection subject="Shortcuts">
        <>
          <ShortcutInput label="Moving Window:" />
        </>
      </SettingSection>
    );
  }
);

const useStyle = createUseStyles({});

export default ShortcutSetting;
