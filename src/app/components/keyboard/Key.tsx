import React, { ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import { observer } from "mobx-react-lite";

import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import { ConfigContext, GlobalStateContext } from "../../stores/context";
import theme from "../../config/theme";

export type KeyProps = {
  onActivate: React.MouseEventHandler;
  onDeactivate: React.MouseEventHandler;
  isActive: boolean;
  className?: string;
  children?: ReactElement;
};

const Key = observer(
  ({
    className,
    children,
    onActivate,
    onDeactivate,
    isActive,
  }: KeyProps): ReactElement => {
    const { transparency } = useContext(ConfigContext);
    const { isTransparent, darkMode } = useContext(GlobalStateContext);

    const { active, dark, light, container } = useStyle({
      isActive,
      isTransparent,
      transparency,
      darkMode,
    });

    const classNames = ` ${container} ${darkMode ? dark : light} ${
      isActive ? active : ""
    } ${className}`;

    return (
      <div
        className={classNames}
        onMouseDown={onActivate}
        onMouseUp={onDeactivate}
      >
        {children}
      </div>
    );
  }
);

const useStyle = createUseStyles({
  container: {
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

  dark: theme.dark,
  light: theme.light,
  active: {
    backgroundColor: colors.lightBlue,
    color: colors.white,
    opacity: 1,
  },
});

export default Key;
