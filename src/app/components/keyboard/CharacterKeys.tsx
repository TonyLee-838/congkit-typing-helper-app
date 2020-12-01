import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

import FunctionKeys from "./FunctionKeys";
import HintBox from "./HintBox";
import Key from "./Key";
import { KeyContext } from "../../stores/context";

const CharacterKeys: FC = observer(
  (): ReactElement => {
    const classes = useKeysStyle();
    const keyStore = useContext(KeyContext);
    const { keyInfo, activeKey } = keyStore;

    return (
      <div className={classes.container}>
        {keyInfo.map((col, index) => (
          <div className={classes.keyboardColumn}>
            {col.map((key) => (
              <div className={classes.characterKeys}>
                <Key
                  isActive={activeKey.toUpperCase() === key.letter}
                  onActivate={action(() =>
                    keyStore.setActiveKey(key.letter.toUpperCase())
                  )}
                  onDeactivate={action(() => keyStore.clearActiveKey())}
                >
                  <>
                    <div className={classes.letter}>{key.letter}</div>
                    <div className={classes.character}>{key.character}</div>
                  </>
                </Key>

                {activeKey.toUpperCase() === key.letter && (
                  <HintBox hints={key.hints.split("")} />
                )}
              </div>
            ))}
            {index === keyInfo.length - 1 && <FunctionKeys />}
          </div>
        ))}
      </div>
    );
  }
);

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
