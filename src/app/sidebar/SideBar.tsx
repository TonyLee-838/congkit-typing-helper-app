import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import colors from "../config/color";
import Icon from "../Icon";

interface SideBarProps {
  isExpanded: boolean;
}

const SideBar: FC<SideBarProps> = ({ isExpanded }): ReactElement => {
  const classes = useStyle({ isExpanded });
  return (
    <div className={classes.container}>
      <Icon name="BsBookmarksFill" className={classes.icon} />
      <Icon name="BsGearFill" className={classes.icon} />
      <Icon name="BsPower" className={`${classes.icon} ${classes.exitIcon} `} />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    transition: "all 300ms ease-in-out ",
    position: "relative",
    height: "195px",
    width: ({ isExpanded }) => (isExpanded ? "70px" : "0px"),
    right: ({ isExpanded }) => (isExpanded ? "-10px" : "-80px"),
    backgroundColor: colors.medium,
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    boxShadow: "3px 3px 3.5px" + colors.dark,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    padding: "20px 10px 20px 10px",
    fontSize: ({ isExpanded }) => (isExpanded ? "1.5rem" : "0"),
    transition: "font-size 300ms ease-in-out, color 100ms ease ",
    cursor: "pointer",
    "&:hover": {
      color: colors.lightBlue,
    },
  },
  exitIcon: {
    "&:hover": {
      color: colors.red,
    },
  },
});

export default SideBar;
