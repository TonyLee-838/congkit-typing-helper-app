import { action } from "mobx";
import { observer } from "mobx-react-lite";
import React, { ReactElement, useContext, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { KeyContext } from "../../stores/keyContext";
import CharacterKeys from "./CharacterKeys";
interface KeyboardProps {
  listenToKeyboard: boolean;
  onSidebarKeyClick: Function;
}

const Keyboard = observer(
  ({ listenToKeyboard, onSidebarKeyClick }: KeyboardProps): ReactElement => {
    const keyStore = useContext(KeyContext);
    const { activeKey } = keyStore;

    //register keyboard event to global document object.
    useEffect(() => {
      if (listenToKeyboard) {
        document.onkeydown = action((ev: any) => keyStore.setActiveKey(ev.key));
        document.onkeyup = action(() => keyStore.setActiveKey(""));
      } else {
        document.onkeydown = null;
        document.onkeyup = null;
      }
    }, [listenToKeyboard]);

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
