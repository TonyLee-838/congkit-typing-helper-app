import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import Button from "../common/Button";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";

interface SearchInputProps {
  onSearch: Function;
  onAddToMemo: Function;
}

const SearchInput: FC<SearchInputProps> = ({
  onSearch,
  onAddToMemo,
}): ReactElement => {
  const classes = useStyle();
  const [value, setValue] = useState("");

  return (
    <div className={classes.container}>
      <input
        value={value}
        type="text"
        className={classes.input}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          label="Search"
          onClick={() => onSearch(value)}
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
    width: "45%",
    height: "30px",
    fontFamily: fontFamilies.text,
    fontSize: "1.25rem",
    margin: "0px 5px 0px 5px",
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
