import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

import MemoInput from "./MemoInput";

interface MemoSubjectProps {
  subject: string;
  editable: boolean;
  onClick: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
  onDelete: React.MouseEventHandler;
  onSubmit: React.MouseEventHandler;
}

const MemoSubject: FC<MemoSubjectProps> = ({
  subject,
  editable,
  onClick,
  onCancel,
  onDelete,
  onSubmit,
}): ReactElement => {
  const classes = useStyle();
  return editable ? (
    <MemoInput
      initialValue={subject}
      onCancel={onCancel}
      onSubmit={onSubmit}
      deleteButton
      onDelete={onDelete}
    />
  ) : (
    <h3 className={classes.subject} onClick={onClick}>
      {subject}
    </h3>
  );
};

const useStyle = createUseStyles({
  subject: {
    margin: 0,
    cursor: "pointer",
  },
});

export default MemoSubject;
