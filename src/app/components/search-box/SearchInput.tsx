import React, { FC, ReactElement, useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import Button from "../common/Button";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import { GlobalStateContext } from "../../stores/context";

interface SearchInputProps {
  onSearch: Function;
  onAddToMemo: Function;
  onClear: Function;
}

const SearchInput: FC<SearchInputProps> = ({
  onSearch,
  onAddToMemo,
  onClear,
}): ReactElement => {
  const [value, setValue] = useState("");

  const { darkMode } = useContext(GlobalStateContext);
  const classes = useStyle({ darkMode });

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onSearch(value);
  };

  return (
    <div className={classes.container}>
      <input
        value={value}
        type="text"
        className={classes.input}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleEnterKeyPress}
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
          label="Clear"
          onClick={() => {
            onClear();
            setValue("");
          }}
          theme="warning"
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
    backgroundColor: ({ darkMode }) => (darkMode ? colors.dark : colors.white),
    color: ({ darkMode }) => (darkMode ? colors.white : colors.black),
  },
  buttons: {
    width: "max-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    margin: "0px 3px 0px 3px",
    height: "",
    backgroundColor: ({ darkMode }) =>
      darkMode ? colors.medium : colors.white,
  },
});

export default SearchInput;
