import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import Icon from "../common/Icon";
import colors from "../../config/color";

interface MemoInputProps {
  deleteButton?: boolean;
  initialValue?: string;
  onCancel: React.MouseEventHandler;
  onDelete?: React.MouseEventHandler;
  onSubmit: Function;
  placeholder?: string;
}

const MemoInput: FC<MemoInputProps> = ({
  deleteButton = false,
  initialValue = "",
  onCancel,
  onDelete,
  onSubmit,
  placeholder = "",
}): ReactElement => {
  const classes = useStyle();
  const [value, setValue] = useState(initialValue);

  return (
    <div className={classes.container}>
      <input
        value={value}
        type="text"
        className={classes.input}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={classes.icons}>
        <Icon name="BsX" className={classes.cancelIcon} onClick={onCancel} />
        <Icon
          name="BsCheck"
          className={classes.submitIcon}
          onClick={() => onSubmit(value)}
        />
        {deleteButton && (
          <Icon
            name="BsTrash"
            className={classes.deleteIcon}
            onClick={onDelete}
          />
        )}
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    // display: "flex",
    position: "relative",
  },
  input: {
    width: "75px",
    "&::placeholder": {
      fontStyle: "italic",
    },
  },
  icons: {
    display: "flex",
    width: "50px",
    position: "absolute",
    transform: "translate(82px,-90%)",
    alignItems: "center",
    "& *": {
      fontSize: "1.5rem",
    },
  },
  cancelIcon: {
    color: colors.red,
  },
  submitIcon: {
    color: colors.green,
    // fontSize: "1.5rem",
  },
  deleteIcon: {
    color: colors.darkBlue,
  },
});

export default MemoInput;
