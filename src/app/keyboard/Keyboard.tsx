import React, { ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CharacterKeys from "./CharacterKeys";
import FunctionKey from "./FunctionKey";
import { KeyInfo } from "../keyInfo";
import { getKeyInfo } from "../db/api/keyInfo";
interface KeyboardProps {
  listenToKeyboard: boolean;
  isTransparent: boolean;
  onSidebarKeyClick: Function;
  onTransparencyKeyClick: Function;
}

const Keyboard = ({
  listenToKeyboard,
  isTransparent,
  onSidebarKeyClick,
  onTransparencyKeyClick,
}: KeyboardProps): ReactElement => {
  const [keys, setKeys] = useState<KeyInfo[][]>([]);
  const [activeKey, setActiveKey] = useState("");

  const handleClearKey = () => setActiveKey("");
  const handleAddKey = (key: string) => setActiveKey(key);

  //get keyboard info from local db when keyboard is initializing
  useEffect(() => {
    const keys = getKeyInfo();
    setKeys(keys);
  }, []);

  //register keyboard event to global document object.
  useEffect(() => {
    if (listenToKeyboard) {
      document.onkeydown = (ev) => handleAddKey(ev.key);
      document.onkeyup = handleClearKey;
    } else {
      document.onkeydown = null;
      document.onkeyup = null;
    }
  }, [listenToKeyboard]);

  const classes = useStyle({ activeKey });

  const FunctionKeys = () => (
    <div className={classes.functionKeys}>
      <FunctionKey
        isActive={activeKey === "Trans"}
        icon={"BsEyeFill"}
        isTransparent={isTransparent}
        onActivate={() => handleAddKey("Trans")}
        onDeactivate={() => {
          onTransparencyKeyClick();
          handleClearKey();
        }}
      />
      <FunctionKey
        isActive={activeKey === "Expand"}
        icon={"BsLayoutSidebarInsetReverse"}
        isTransparent={isTransparent}
        onActivate={() => handleAddKey("Expand")}
        onDeactivate={() => {
          onSidebarKeyClick();
          handleClearKey();
        }}
      />
    </div>
  );

  return (
    <div className={classes.container}>
      <CharacterKeys
        keys={keys}
        activeKey={activeKey}
        isTransparent={isTransparent}
        onSetActiveKey={handleAddKey}
        onClearActiveKey={handleClearKey}
        FunctionKeys={FunctionKeys}
      />
    </div>
  );
};

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
