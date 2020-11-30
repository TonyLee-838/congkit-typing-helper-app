import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";

interface ToggleInputProps {
  label: string;
}

const ToggleInput: FC<ToggleInputProps> = ({ label }): ReactElement => {
  const [active, setActive] = useState(false);
  const classes = useStyle({ active });

  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <div className={classes.toggle}>
        <div className={classes.input} />
        <span className={classes.slider} onClick={() => setActive(!active)} />
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
  },
  input: {
    width: "50px",
    height: "25px",
    position: "relative",
    display: "inline-block",
    borderRadius: "13px",
    backgroundColor: ({ active }) =>
      active ? colors.lightBlue : colors.medium,
    boxShadow: " inset 1.5px 1.5px 1px" + colors.dark,
  },
  slider: {
    position: "absolute",
    left: "14.5px",
    height: "24px",
    width: "24px",
    borderRadius: "12px",
    backgroundColor: colors.white,
    boxShadow: "2px 2px 1px" + colors.dark,
    cursor: "pointer",
    transform: ({ active }) => `translateX(${active ? "26px" : "0px"})`,
  },
});

export default ToggleInput;
