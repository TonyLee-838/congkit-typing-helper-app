import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

import { terminateApp } from "../../remote";

import Icon from "../common/Icon";
import colors from "../../config/color";
import { ConfigContext, GlobalStateContext } from "../../stores/context";
import theme from "../../config/theme";

const SideBar: FC = observer(
  (): ReactElement => {
    const globalStateStore = useContext(GlobalStateContext);
    const { darkMode } = useContext(ConfigContext);

    const classes = useStyle({
      isExpanded: globalStateStore.isSidebarExpanded,
    });

    const handleSelect = (button: ControlButtonType) =>
      action(() => globalStateStore.setSelectedButton(button));

    return (
      <div
        className={`${classes.container} ${
          darkMode ? classes.dark : classes.light
        } `}
      >
        <Icon
          name="BsBookmarksFill"
          className={classes.icon}
          onClick={handleSelect("memo")}
        />
        <Icon
          name="BsSearch"
          className={`${classes.icon} ${classes.searchIcon} `}
          onClick={handleSelect("search")}
        />
        <Icon
          name="BsGearFill"
          className={classes.icon}
          onClick={handleSelect("setting")}
        />
        <Icon
          name="BsPower"
          className={`${classes.icon} ${classes.exitIcon} `}
          onClick={() => terminateApp()}
        />
      </div>
    );
  }
);

const useStyle = createUseStyles({
  container: {
    transition: "all 150ms ease-in-out ",
    position: "relative",
    height: "195px",
    width: ({ isExpanded }) => (isExpanded ? "70px" : "0px"),
    right: ({ isExpanded }) => (isExpanded ? "-10px" : "-80px"),
    // backgroundColor: colors.light,
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

  dark: theme.dark,
  light: theme.light,
});

export default SideBar;
