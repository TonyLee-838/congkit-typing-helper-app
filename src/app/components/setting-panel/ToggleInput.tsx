import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";

interface ToggleInputProps {
  label: string;
  on: boolean;
  onToggle: Function;
}

const ToggleInput: FC<ToggleInputProps> = ({
  label,
  on,
  onToggle,
}): ReactElement => {
  // const [on, seton] = useState(false);
  const classes = useStyle({ on });

  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <div className={classes.toggle}>
        <div className={classes.input} />
        <span className={classes.slider} onClick={() => onToggle(!on)} />
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {},
  label: {
    display: "block",
    margin: "5px 0px 5px 0px",
  },
  toggle: {
    "& *": {
      transition: "all 400ms ease",
    },
    position: "relative",
  },
  input: {
    width: "50px",
    height: "25px",
    display: "inline-block",
    borderRadius: "13px",
    backgroundColor: ({ on }) => (on ? colors.lightBlue : colors.medium),
    boxShadow: " inset 1.5px 1.5px 1px" + colors.dark,
  },
  slider: {
    position: "absolute",
    height: "24px",
    width: "24px",
    top: "0px",
    left: "0px",
    borderRadius: "12px",
    backgroundColor: colors.white,
    boxShadow: "2px 2px 1px" + colors.dark,
    cursor: "pointer",
    transform: ({ on }) => `translateX(${on ? "26px" : "0px"})`,
  },
});

export default ToggleInput;
