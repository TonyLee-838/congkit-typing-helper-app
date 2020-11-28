import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import colors from "../config/color";
import MemoInput from "./MemoInput";

interface MemoEntityProps {
  entity: Memo.EntityType;
  editMode: boolean;
  onClick: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
  onSubmit: React.MouseEventHandler;
  onDelete: React.MouseEventHandler;
}

const MemoEntity: FC<MemoEntityProps> = ({
  entity,
  editMode,
  onClick,
  onCancel,
  onSubmit,
  onDelete,
}): ReactElement => {
  const classes = useStyle({ editMode });
  return editMode ? (
    <MemoInput
      initialValue={`${entity.char}＝${entity.input}`}
      onCancel={onCancel}
      onSubmit={onSubmit}
      deleteButton
      onDelete={onDelete}
    />
  ) : (
    <div className={classes.entity} onClick={onClick}>
      <span className={classes.char}>{entity.char}</span>
      <span className={classes.input}>{entity.input}</span>
    </div>
  );
};

const useStyle = createUseStyles({
  entity: {
    width: "max-content",
    cursor: "pointer",
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
