import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

import Icon from "../common/Icon";
import colors from "../../config/color";
import { terminateApp } from "../../remote";

interface SideBarProps {
  isExpanded: boolean;
  onSelect: Function;
  buttonSelected: ControlButtonType;
}

const SideBar: FC<SideBarProps> = ({
  isExpanded,
  onSelect,
  buttonSelected,
}): ReactElement => {
  const classes = useStyle({ isExpanded });
  return (
    <div className={classes.container}>
      <Icon
        name="BsBookmarksFill"
        className={classes.icon}
        onClick={() => onSelect("memo")}
      />
      <Icon
        name="BsSearch"
        className={`${classes.icon} ${classes.searchIcon} `}
        onClick={() => onSelect("search")}
      />
      <Icon
        name="BsGearFill"
        className={classes.icon}
        onClick={() => onSelect("setting")}
      />
      <Icon
        name="BsPower"
        className={`${classes.icon} ${classes.exitIcon} `}
        onClick={() => terminateApp()}
      />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    transition: "all 150ms ease-in-out ",
    position: "relative",
    height: "195px",
    width: ({ isExpanded }) => (isExpanded ? "70px" : "0px"),
    right: ({ isExpanded }) => (isExpanded ? "-10px" : "-80px"),
    backgroundColor: colors.light,
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    boxShadow: "3px 3px 3.5px" + colors.dark,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    padding: "10px",
    fontSize: ({ isExpanded }) => (isExpanded ? "1.5rem" : "0"),
    transition: "font-size 300ms ease-in-out, color 150ms ease ",
    cursor: "pointer",
    "&:hover": {
      color: colors.lightBlue,
    },
  },
  searchIcon: {
    "&:hover": {
      color: colors.green,
    },
  },
  exitIcon: {
    "&:hover": {
      color: colors.red,
    },
  },
});

export default SideBar;