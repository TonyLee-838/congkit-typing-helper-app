import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import Button from "../app/common/Button";
import colors from "../app/config/color";

interface SearchInputProps {}

const SearchInput: FC<SearchInputProps> = (props): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <input type="text" className={classes.input} />
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          label="Search"
          onClick={() => {}}
          theme="info"
        />
        <Button
          className={classes.button}
          label="Add"
          onClick={() => {}}
          theme="success"
        />
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderRadius: "3px",
    boxShadow: "0px 0px 3px" + colors.dark,
    width: "50%",
    height: "30px",
  },
  buttons: {
    width: "max-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    margin: "0px 5px 0px 5px",
    height: "",
  },
});

export default SearchInput;
