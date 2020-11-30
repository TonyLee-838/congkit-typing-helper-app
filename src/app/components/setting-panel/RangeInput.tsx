import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

interface RangeInputProps {
  label: string;
  max: number;
  min: number;
}

const RangeInput: FC<RangeInputProps> = ({ label, max, min }): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <input type="range" max={max} min={min} />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {},
  label: {
    display: "block",
    margin: "5px 0px 5px 0px",
  },
});

export default RangeInput;
