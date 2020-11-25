import React, { ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CharacterKey from "./CharacterKey";
import FunctionKey from "./FuntionKey";
import HintBox from "./HintBox";
import keys from "./keyInfo";

const Keyboard = (): ReactElement => {
  const [activeKey, setActiveKey] = useState("");
  const [isTransparent, setIsTransparent] = useState(true);

  const handleClearKey = () => setActiveKey("");
  const handleAddKey = (key: string) => setActiveKey(key);
  const handleChangeTransparency = () => {
    setActiveKey("");
    setIsTransparent(!isTransparent);
  };

  //register keyboard event to global document object.
  useEffect(() => {
    document.onkeydown = (ev) => handleAddKey(ev.key);
    document.onkeyup = handleClearKey;
  }, []);

  const classes = useStyle({ activeKey });

  return (
    <div className={classes.container}>
      {keys.map((col, index) => (
        <div className={classes.keyboardColumn}>
          {col.map((key) => (
            <div className={classes.characterKeys}>
              <CharacterKey
                letter={key.letter}
                character={key.character}
                isActive={activeKey.toUpperCase() === key.letter}
                isTransparent={isTransparent}
                onActivate={() => handleAddKey(key.letter.toUpperCase())}
                onDeactivate={handleClearKey}
              />
              {activeKey.toUpperCase() === key.letter && (
                <HintBox hints={key.hints.split("")} />
              )}
            </div>
          ))}
          {index === keys.length - 1 && (
            <div className={classes.functionKeys}>
              <FunctionKey
                isActive={activeKey === "Trans"}
                icon={"BsEyeFill"}
                isTransparent={isTransparent}
                onActivate={() => handleAddKey("Trans")}
                onDeactivate={handleChangeTransparency}
              />
            </div>
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
  characterKeys: {
    cursor: "pointer",
    position: "relative",
  },
  functionKeys: {
    display: "flex",
    flexDirection: "column",
    height: "min-content",
  },
});

export default Keyboard;
