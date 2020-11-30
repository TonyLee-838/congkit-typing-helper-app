import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";

interface RangeInputProps {
  label: string;
  max: number;
  min: number;
  onChange: Function;
  step: number;
  value: number;
}

const RangeInput: FC<RangeInputProps> = ({
  label,
  max,
  min,
  onChange,
  step,
  value,
}): ReactElement => {
  const classes = useStyle();
  //   const [value, setValue] = useState(min);
  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <input
        value={value}
        type="range"
        max={max}
        min={min}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <label>{value}</label>
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
