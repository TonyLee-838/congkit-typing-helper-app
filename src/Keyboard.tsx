import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import HintBox from "./HintBox";
import Key from "./Key";

import keys from "./keyInfo";

interface KeyboardProps {
  clicked: string;
}

const Keyboard: FC<KeyboardProps> = ({ clicked }): ReactElement => {
  const classes = useStyle({ clicked });
  console.log(clicked);
  return (
    <div className={classes.container}>
      {keys.map((col) => (
        <div className={classes.keyboardColumn}>
          {col.map((key) => (
            <div className={classes.keyContainer}>
              <Key
                letter={key.letter}
                character={key.character}
                isActive={clicked.toUpperCase() === key.letter}
              />
              {clicked.toUpperCase() === key.letter && (
                <HintBox hints={key.hints.split("")} />
              )}
            </div>
          ))}
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

    padding: "50px",
    backgroundColor: "transparent",
  },
  keyboardColumn: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
  },
  keyContainer: {
    position: "relative",
  },
});

export default Keyboard;
