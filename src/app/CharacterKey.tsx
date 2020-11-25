import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import Key, { KeyProps } from "./Key";

interface CharacterKeyProps extends KeyProps {
  character: string;
  letter: string;
}

const CharacterKey: FC<CharacterKeyProps> = ({
  letter,
  character,
  isTransparent,
  isActive,
  onActivate,
  onDeactivate,
}): ReactElement => {
  const classes = useStyle();
  return (
    <Key
      onDeactivate={onDeactivate}
      onActivate={onActivate}
      isTransparent={isTransparent}
      isActive={isActive}
    >
      <div className={classes.letter}>{letter}</div>
      <div className={classes.character}>{character}</div>
    </Key>
  );
};

const useStyle = createUseStyles({
  character: {
    textAlign: "end",
  },
  letter: {},
});

export default CharacterKey;
