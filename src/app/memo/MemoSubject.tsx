import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import MemoInput from "./MemoInput";

interface MemoSubjectProps {
  subject: string;
  editMode: boolean;
  onClick: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
  onSubmit: React.MouseEventHandler;
}

const MemoSubject: FC<MemoSubjectProps> = ({
  subject,
  editMode,
  onClick,
  onCancel,
  onSubmit,
}): ReactElement => {
  const classes = useStyle();
  return editMode ? (
    <MemoInput initialValue={subject} onCancel={onCancel} onSubmit={onSubmit} />
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
