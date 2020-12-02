import { observer } from "mobx-react-lite";
import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";

import colors from "../../config/color";
import theme from "../../config/theme";
import { ConfigContext } from "../../stores/context";

export interface ExpandableProps {
  expanded: boolean;
  children?: ReactElement;
  className?: string;
}

const ExpandableDiv: FC<ExpandableProps> = observer(
  ({ expanded = false, children, className = "" }): ReactElement => {
    const classes = useStyle({ expanded });
    const { darkMode } = useContext(ConfigContext);
    return (
      <div
        className={`${classes.container} ${
          darkMode ? classes.dark : classes.light
        } ${className} `}
      >
        {expanded ? children : null}
      </div>
    );
  }
);

const useStyle = createUseStyles({
  container: {
    position: "absolute",
    width: ({ expanded }) => (expanded ? "370px" : "0%"),
    transition: "all 300ms ease",
    height: "195px",
    right: "100px",
    boxShadow: "3px 3px 3.5px" + colors.dark,
    overflowY: "scroll",
    overflowX: "hidden",

    backgroundColor: colors.light,
    "& *": {
      width: ({ expanded }) => (expanded ? "100%" : "0%"),
    },
  },
  dark: theme.dark,
  light: theme.light,
});

export default ExpandableDiv;
