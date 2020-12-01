import React, { FC, ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { getConfig } from "../../../db/api/config";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";

export type KeyProps = {
  onActivate: Function;
  onDeactivate: Function;
  isTransparent: boolean;
  isActive: boolean;
  className?: string;
};

const TRANSPARENCY_PATH = "appearance.transparency";

const Key: FC<KeyProps> = ({
  className,
  children,
  onActivate,
  onDeactivate,
  isActive,
  isTransparent,
}): ReactElement => {
  const [transparency, setTransparency] = useState(
    getConfig(TRANSPARENCY_PATH)
  );

  const classes = useStyle({ isActive, isTransparent, transparency });

  const handleMouseDown = () => {
    onActivate();
  };
  const handleMouseUp = () => {
    onDeactivate();
  };

  useEffect(() => {
    setTransparency(getConfig(TRANSPARENCY_PATH));
  }, [isTransparent]);

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
    opacity: ({ isActive, isTransparent, transparency }) =>
      isTransparent ? (isActive ? 1 : transparency) : 1,
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
