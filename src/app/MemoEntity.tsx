import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import colors from "./config/color";
import MemoInput from "./MemoInput";

interface MemoEntityProps {
  entity: Memo.EntityType;
  editMode: boolean;
  onClick: React.MouseEventHandler;
}

const MemoEntity: FC<MemoEntityProps> = ({
  entity,
  editMode,
  onClick,
}): ReactElement => {
  const classes = useStyle();
  return editMode ? (
    <MemoInput value={`${entity.char}＝${entity.input}`} />
  ) : (
    <div className={classes.entity} onClick={onClick}>
      <span className={classes.char}>{entity.char}</span>
      <span className={classes.input}>{entity.input}</span>
    </div>
  );
};

const useStyle = createUseStyles({
  entity: {
    "& *": {
      cursor: "pointer",
    },
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
