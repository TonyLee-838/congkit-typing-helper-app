import React, { ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CharacterKeys from "./CharacterKeys";
import FunctionKey from "./FunctionKey";
import keys from "./keyInfo";
interface KeyboardProps {
  isTransparent: boolean;
  onSidebarKeyClick: Function;
  onTransparencyKeyClick: Function;
}

const Keyboard = ({
  isTransparent,
  onSidebarKeyClick,
  onTransparencyKeyClick,
}: KeyboardProps): ReactElement => {
  const [activeKey, setActiveKey] = useState("");

  const handleClearKey = () => setActiveKey("");
  const handleAddKey = (key: string) => setActiveKey(key);

  //register keyboard event to global document object.
  useEffect(() => {
    document.onkeydown = (ev) => handleAddKey(ev.key);
    document.onkeyup = handleClearKey;
  }, []);

  const classes = useStyle({ activeKey });

  return (
    <div className={classes.container}>
      <CharacterKeys
        keys={keys}
        activeKey={activeKey}
        isTransparent={isTransparent}
        onSetActiveKey={handleAddKey}
        onClearActiveKey={handleClearKey}
      />
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
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: "10%",
    backgroundColor: "transparent",
  },
  keyboardColumn: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
  },
  characterKeys: {
    cursor: "pointer",
    position: "relative",
  },
  functionKeys: {
    top: "-71px",
    right: "-136px",
    display: "flex",
    flexDirection: "column",
    height: "min-content",
    width: "min-content",
    position: "relative",
  },
});

export default Keyboard;
