import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import Icon from "../common/Icon";
import colors from "../config/color";

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
    <Icon
      name="BsCheck"
      className={`${classes.editIcon} ${classes.finishIcon} `}
      onClick={onFinish}
    />
  ) : (
    <Icon name="BsHammer" className={classes.editIcon} onClick={onEdit} />
  );
};

const useStyle = createUseStyles({
  editIcon: {
    position: "absolute",
    width: "30px",
    top: "3px",
    right: "25px",

    opacity: 0.15,
    color: colors.dark,
    "&:hover": {
      opacity: 1,
      fontWeight: "bolder",
    },
    fontSize: "25px",
    fontWeight: "bold",
    transition: "all 100ms ease",
  },
  finishIcon: {
    color: colors.green,
    opacity: 0.7,
  },
});

export default MemoControlButtons;
