import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import { action } from "mobx";

import Icon from "../common/Icon";
import Key from "./Key";
import { KeyContext, ConfigContext } from "../../stores/context";
import fontFamilies from "../../config/fontFamily";

const FunctionKeys = () => {
  const classes = useStyle();
  const keyStore = useContext(KeyContext);
  const configStore = useContext(ConfigContext);

  return (
    <div className={classes.functionKeys}>
      <Key
        className={classes.key}
        isActive={keyStore.activeKey === "Trans"}
        onActivate={action(() => keyStore.setActiveKey("Trans"))}
        onDeactivate={action(() => {
          configStore.toggleTransparent();
          keyStore.clearActiveKey();
        })}
      >
        <Icon name={"BsEyeFill"} className={classes.icon} />
      </Key>
      <Key
        className={classes.key}
        isActive={keyStore.activeKey === "Expand"}
        onActivate={action(() => keyStore.setActiveKey("Expand"))}
        onDeactivate={action(() => {
          // onSidebarKeyClick();
          keyStore.clearActiveKey();
        })}
      >
        <Icon name={"BsLayoutSidebarInsetReverse"} className={classes.icon} />
      </Key>
    </div>
  );
};

const useStyle = createUseStyles({
  key: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2.5px 5px 2.5px 5px",
  },
  icon: {
    fontSize: "0.9rem",
    fontWeight: "bolder",
    fontFamily: fontFamilies.text,
  },

  functionKeys: {
    display: "flex",
    flexDirection: "column",
    height: "min-content",
    width: "min-content",
    position: "relative",
  },
});

export default FunctionKeys;
