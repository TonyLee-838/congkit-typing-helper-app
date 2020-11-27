import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import Icon from "./common/Icon";
import colors from "./config/color";

interface MemoInputProps {
  value: string;
}

const MemoInput: FC<MemoInputProps> = ({ value }): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <input
        value={value}
        type="text"
        className={classes.input}
        placeholder="例＝人弓"
      />
      <div className={classes.icons}>
        <Icon name="BsX" className={classes.cancelIcon} />
        <Icon name="BsCheck" className={classes.submitIcon} />
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
});

export default MemoInput;
