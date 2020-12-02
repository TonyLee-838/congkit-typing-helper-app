import { observer } from "mobx-react-lite";
import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import colors from "../../config/color";
import { ConfigContext } from "../../stores/context";
import MemoInput from "./MemoInput";

interface MemoEntityProps {
  entity: Memo.EntityType;
  editable: boolean;
  onClick: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
  onSubmit: React.MouseEventHandler;
  onDelete: React.MouseEventHandler;
}

const MemoEntity: FC<MemoEntityProps> = observer(
  ({
    entity,
    editable,
    onClick,
    onCancel,
    onSubmit,
    onDelete,
  }): ReactElement => {
    const { darkMode } = useContext(ConfigContext);
    const classes = useStyle({ editable, darkMode });
    return editable ? (
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
  }
);

const useStyle = createUseStyles({
  entity: {
    width: "max-content",
    cursor: "pointer",
  },
  char: {
    color: ({ darkMode }) => (darkMode ? colors.lightBlue : colors.darkBlue),
    fontWeight: "bolder",
    marginRight: "4px",
  },
  input: {
    color: colors.red,
  },
});

export default MemoEntity;
