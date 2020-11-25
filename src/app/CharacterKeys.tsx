import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

import HintBox from "./HintBox";
import Key from "./Key";
import { KeyInfo } from "./keyInfo";

interface CharacterKeysProps {
  keys: KeyInfo[][];
  activeKey: string;
  isTransparent: boolean;
  onSetActiveKey: Function;
  onClearActiveKey: Function;
}

const CharacterKeys: FC<CharacterKeysProps> = ({
  keys,
  activeKey,
  isTransparent,
  onSetActiveKey,
  onClearActiveKey,
}): ReactElement => {
  const classes = useKeysStyle();
  return (
    <div className={classes.container}>
      {keys.map((col) => (
        <div className={classes.keyboardColumn}>
          {col.map((key) => (
            <div className={classes.characterKeys}>
              <Key
                isActive={activeKey.toUpperCase() === key.letter}
                isTransparent={isTransparent}
                onActivate={() => onSetActiveKey(key.letter.toUpperCase())}
                onDeactivate={onClearActiveKey}
              >
                <div className={classes.letter}>{key.letter}</div>
                <div className={classes.character}>{key.character}</div>
              </Key>

              {activeKey.toUpperCase() === key.letter && (
                <HintBox hints={key.hints.split("")} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const useKeysStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    // Leave some room for function keys
    "& > div:nth-child(3)": {
      right: "15px",
    },
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
  character: {
    textAlign: "end",
  },
  letter: {},
});

export default CharacterKeys;
