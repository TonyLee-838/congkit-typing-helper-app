import React, { FC, ReactElement } from "react";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import fontFamilies from "./config/fontFamily";

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
    backgroundColor: ({ isActive }) => (isActive ? "#079afa" : "#e4e4e4"),
    color: ({ isActive }) => (isActive ? "#f3f6f6" : "#0f1010"),
    boxShadow: "3px 3px 2px #7d7d7d",
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
