import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import colors from "./config/color";

interface HintBoxProps {
  hints: string[];
}

const HintBox: FC<HintBoxProps> = ({ hints }): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      {hints.map((hint) => (
        <span className={classes.hint}>{hint}</span>
      ))}
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "absolute",
    padding: "5px",
    height: "1.5rem",
    borderRadius: "5px",
    color: colors.white,
    fontWeight: "bolder",
    backgroundColor: colors.lightBlue,
    boxShadow: "2px 2px 2px" + colors.dark,
    top: "-40px",
    width: "max-content",
  },
  hint: {
    width: "0px 3px 0px 3px",
  },
});

export default HintBox;
