import React, { ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import FunctionKey from "./FuntionKey";
import HintBox from "./HintBox";
import Key from "./Key";
import keys from "./keyInfo";

interface KeyboardProps {
  isTransparent: boolean;
  onTransparencyChange: React.MouseEventHandler;
}

const Keyboard = ({
  isTransparent,
  onTransparencyChange,
}: KeyboardProps): ReactElement => {
  const [activeKey, setActiveKey] = useState("");

  const handleClearKey = () => setActiveKey("");
  const handleAddKey = (key: string) => setActiveKey(key);

  useEffect(() => {
    document.onkeydown = (ev) => handleAddKey(ev.key);
    document.onkeyup = handleClearKey;
  }, []);

  const classes = useStyle({ activeKey });

  return (
    <div className={classes.container}>
      {keys.map((col, i) => (
        <div className={classes.keyboardColumn}>
          {col.map((key, j) => (
            <div
              className={classes.keyContainer}
              onMouseDown={() => handleAddKey(key.letter.toUpperCase())}
              onMouseUp={handleClearKey}
            >
              <Key
                letter={key.letter}
                character={key.character}
                isActive={activeKey.toUpperCase() === key.letter}
                isTransparent={isTransparent}
              />
              {activeKey.toUpperCase() === key.letter && (
                <HintBox hints={key.hints.split("")} />
              )}
            </div>
          ))}
          {i === keys.length - 1 && (
            <FunctionKey
              isTransparent={isTransparent}
              onClick={onTransparencyChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: "10%",
    backgroundColor: "transparent",
  },
  keyboardColumn: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
  },
  keyContainer: {
    cursor: "pointer",
    position: "relative",
  },
});

export default Keyboard;
