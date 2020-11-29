import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

import colors from "../../config/color";

export interface ExpandableProps {
  expanded: boolean;
  children?: ReactElement;
  className?: string;
}

const ExpandableDiv: FC<ExpandableProps> = ({
  expanded = false,
  children,
  className = "",
}): ReactElement => {
  const classes = useStyle({ expanded });
  return (
    <div className={`${classes.container} ${className} `}>
      {expanded ? children : null}
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "absolute",
    width: ({ expanded }) => (expanded ? "370px" : "0%"),
    transition: "width 300ms ease",
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
});

export default ExpandableDiv;
