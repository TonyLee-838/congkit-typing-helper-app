import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";

import ExpandableDiv from "../common/ExpandableDiv";
import Separator from "../common/Separator";
import AppearanceSetting from "./AppearanceSetting";
import fontFamilies from "../../config/fontFamily";
import colors from "../../config/color";
import { GlobalStateContext } from "../../stores/context";
import { observer } from "mobx-react-lite";
import ShortcutSetting from "./ShortcutSetting";

/**
 * Appearance setting:
 * 1. Adjust transparency
 * 2. Change font color, background color/images, fontFamily
 *
 *
 * Dictionary setting:
 * 1. Import custom dictionary,
 * 2. customize hints
 */

const SettingPanel: FC = observer(
  (): ReactElement => {
    const classes = useStyle();

    const globalStateStore = useContext(GlobalStateContext);

    return (
      <ExpandableDiv expanded={globalStateStore.selectedButton === "setting"}>
        <div>
          <h3 className={classes.heading}>Setting</h3>
          <Separator />
          <div className={classes.container}>
            <AppearanceSetting />
            <ShortcutSetting />
          </div>
        </div>
      </ExpandableDiv>
    );
  }
);

const useStyle = createUseStyles({
  container: {
    padding: "10px",
    width: "90%",
  },
  heading: {
    margin: "5px 5px 5px 10px",
    fontFamily: fontFamilies.text,
    color: colors.dark,
    fontStyle: "italic",
  },
});

export default SettingPanel;
