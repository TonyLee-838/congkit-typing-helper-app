import React, { ReactElement, useContext, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

import CharacterKeys from "./CharacterKeys";
import { GlobalStateContext, KeyContext } from "../../stores/context";

const Keyboard = observer(
  (): ReactElement => {
    const keyStore = useContext(KeyContext);
    const globalStateStore = useContext(GlobalStateContext);
    const { activeKey } = keyStore;
    const { isListeningToKeyboard } = globalStateStore;

    //register keyboard event to global document object.
    useEffect(() => {
      if (isListeningToKeyboard) {
        document.onkeydown = action((ev: any) => keyStore.setActiveKey(ev.key));
        document.onkeyup = action(() => keyStore.setActiveKey(""));
      } else {
        document.onkeydown = null;
        document.onkeyup = null;
      }
    }, [isListeningToKeyboard, keyStore, globalStateStore]);

    const classes = useStyle({ activeKey });

    return (
      <div className={classes.container}>
        <CharacterKeys />
      </div>
    );
  }
);

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },

  functionKeys: {
    display: "flex",
    flexDirection: "column",
    height: "min-content",
    width: "min-content",
    position: "relative",
  },
});

export default Keyboard;
