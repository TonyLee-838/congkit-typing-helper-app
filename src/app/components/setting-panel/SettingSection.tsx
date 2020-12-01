import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import fontFamilies from "../../config/fontFamily";

interface SettingSectionProps {
  subject: string;
  children: ReactElement;
}

const SettingSection: FC<SettingSectionProps> = ({
  subject,
  children,
}): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <h4 className={classes.subject}>{subject}</h4>
      <div className={classes.settingBlocks}>{children}</div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    padding: "5px",
    fontFamily: fontFamilies.text,
  },
  subject: {
    margin: "3px 0 7px 0",
  },
  settingBlocks: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "45px",
  },
});

export default SettingSection;
