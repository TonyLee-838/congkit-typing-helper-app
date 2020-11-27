import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import Icon from "../common/Icon";
import colors from "../config/color";
import MemoInput from "./MemoInput";

interface MemoAddButtonProps {
  editable: boolean;
  onAddButtonClick: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
  onSubmit: React.MouseEventHandler;
}

const MemoAddButton: FC<MemoAddButtonProps> = ({
  editable,
  onAddButtonClick,
  onCancel,
  onSubmit,
}): ReactElement => {
  const classes = useStyle();
  return editable ? (
    <MemoInput onCancel={onCancel} onSubmit={onSubmit} />
  ) : (
    <Icon
      name="BsPlusCircle"
      className={classes.addButton}
      onClick={onAddButtonClick}
    />
  );
};

const useStyle = createUseStyles({
  addButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "max-content",
    padding: "5px 30px 5px 30px",
    borderRadius: "5px",
    color: colors.medium,
    "& *": {
      fontSize: "1.25rem",
    },

    "&:hover": {
      color: colors.black,
      backgroundColor: colors.medium,
      fontWeight: "bolder",
    },
  },
});

export default MemoAddButton;
