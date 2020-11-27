import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import Icon from "../common/Icon";

interface MemoControlButtonsProps {
  editMode: boolean;
  onEdit: React.MouseEventHandler;
  onFinish: React.MouseEventHandler;
}

const MemoControlButtons: FC<MemoControlButtonsProps> = ({
  editMode,
  onEdit,
  onFinish,
}): ReactElement => {
  const classes = useStyle();
  return editMode ? (
    <Icon name="BsCheck" className={classes.editIcon} onClick={onFinish} />
  ) : (
    <Icon name="BsHammer" className={classes.editIcon} onClick={onEdit} />
  );
};

const useStyle = createUseStyles({
  editIcon: {
    position: "absolute",
    width: "max-content",
    top: "3px",
    right: "30px",
    opacity: 0.1,
    "&:hover": {
      opacity: 1,
    },
    fontSize: "15px",
    fontWeight: "bold",
  },
});

export default MemoControlButtons;
