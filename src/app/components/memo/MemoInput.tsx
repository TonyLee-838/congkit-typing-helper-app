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

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSubmit(value);
  };

  return (
    <div className={classes.container}>
      <input
        value={value}
        type="text"
        className={classes.input}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleEnterKeyPress}
      />
      <div className={classes.icons}>
        <Icon
          role="button"
          name="BsX"
          className={classes.cancelIcon}
          onClick={onCancel}
        />
        <Icon
          name="BsCheck"
          role="button"
          className={classes.submitIcon}
          onClick={() => onSubmit(value)}
        />
        {deleteButton && (
          <Icon
            role="button"
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
