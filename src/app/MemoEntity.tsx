import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import colors from "./config/color";
import { MemoEntityType } from "./Memo";

interface MemoEntityProps {
  entity: MemoEntityType;
}

const MemoEntity: FC<MemoEntityProps> = ({ entity }): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.entity}>
      <span className={classes.char}>{entity.char}</span>
      <span className={classes.input}>{entity.input}</span>
    </div>
  );
};

const useStyle = createUseStyles({
  entity: {
    // fontFamily: fontFamilies.text,
  },
  char: {
    color: colors.darkBlue,
    fontWeight: "bolder",
    marginRight: "4px",
  },
  input: {
    color: colors.red,
  },
});

export default MemoEntity;
