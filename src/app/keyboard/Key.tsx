import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";

export type KeyProps = {
  onActivate: Function;
  onDeactivate: Function;
  isTransparent: boolean;
  isActive: boolean;
  className?: string;
};

const Key: FC<KeyProps> = ({
  className,
  children,
  onActivate,
  onDeactivate,
  isActive,
  isTransparent,
}): ReactElement => {
  const handleMouseDown = () => {
    onActivate();
  };
  const handleMouseUp = () => {
    onDeactivate();
  };

  const classes = useStyle({ isActive, isTransparent });
  return (
    <div
      className={`${classes.container} ${className} `}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    backgroundColor: ({ isActive }) =>
      isActive ? colors.lightBlue : colors.light,
    color: ({ isActive }) => (isActive ? colors.white : colors.black),
    boxShadow: "3px 3px 2px " + colors.dark,
    borderRadius: "5px",
    opacity: ({ isActive, isTransparent }) =>
      isTransparent ? (isActive ? 1 : 0.45) : 1,
    width: "60%",
    height: "60%",

    margin: "5px",
    padding: "5px",
    transition: "opacity 100ms ease",

    "& *": {
      fontSize: "1rem",
      fontWeight: "bolder",
      fontFamily: fontFamilies.text,
    },
  },
});

export default Key;
