import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

import HintBox from "./HintBox";
import Key from "./Key";

interface CharacterKeysProps {
  keys: KeyInfo[][];
  activeKey: string;
  isTransparent: boolean;
  onSetActiveKey: Function;
  onClearActiveKey: Function;
  FunctionKeys: () => JSX.Element;
}

const CharacterKeys: FC<CharacterKeysProps> = ({
  FunctionKeys,
  keys,
  activeKey,
  isTransparent,
  onSetActiveKey,
  onClearActiveKey,
}): ReactElement => {
  const classes = useKeysStyle();
  return (
    <div className={classes.container}>
      {keys.map((col, index) => (
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
          {index === keys.length - 1 && <FunctionKeys />}
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
