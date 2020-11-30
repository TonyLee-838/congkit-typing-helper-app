import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import ExpandableDiv, { ExpandableProps } from "../common/ExpandableDiv";
import Separator from "../common/Separator";
import AppearanceSetting from "./AppearanceSetting";

interface SettingPanelProps extends ExpandableProps {}

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

const SettingPanel: FC<SettingPanelProps> = ({ expanded }): ReactElement => {
  const classes = useStyle();
  return (
    <ExpandableDiv expanded={expanded}>
      <div>
        <h3 className={classes.heading}>Setting</h3>
        <Separator />
        <div className={classes.container}>
          <AppearanceSetting />
          <AppearanceSetting />
          <AppearanceSetting />
        </div>
      </div>
    </ExpandableDiv>
  );
};

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
