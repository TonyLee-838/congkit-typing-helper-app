import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";

const Separator: FC = (): ReactElement => {
  const classes = useStyle();
  return <div className={classes.container}></div>;
};

const useStyle = createUseStyles({
  container: {
    width: "95%",
    height: "1.5px",
    backgroundColor: colors.darkBlue,
    opacity: 0.5,
    zIndex: "5",
  },
});

export default Separator;
