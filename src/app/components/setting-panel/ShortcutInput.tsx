import React, { FC, ReactElement, useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { observer } from "mobx-react-lite";

import Icon from "../common/Icon";
import colors from "../../config/color";
import { ConfigContext } from "../../stores/context";

const metaKeys: { [index: string]: any } = {
  Meta: {
    icon: "BsCommand",
    value: "CommandOrControl",
  },
  Alt: {
    icon: "BsOption",
    value: "Option",
  },
  Shift: {
    icon: "BsShift",
    value: "Shift",
  },
  Control: {
    icon: "BsChevronUp",
    value: "Control",
  },
};

interface ShortcutInputProps {
  label: string;
}

const ShortcutInput: FC<ShortcutInputProps> = observer(
  ({ label }): ReactElement => {
    const [keys, setKeys] = useState<string[]>([]);
    const { darkMode } = useContext(ConfigContext);

    const classes = useStyle({ darkMode });

    const handleKeyDown = (e: any) => {
      const key = e.code.replace(/((Key)|(Left)|(Right))/, "");
      console.log("key", key);
      if (key === "Backspace") return;
      setKeys([...keys, key]);
      console.log("keys", keys);
    };

    const handleKeyUp = (e: any) => {
      if (e.code === "Backspace") return setKeys([]);
      if (isShortcut()) return;
      setKeys([]);
    };

    const isShortcut = () => {
      return (
        keys.length > 1 &&
        keys.every((key, i) =>
          i === keys.length - 1 ? key.match(/^[A-Z]$/) : metaKeys[key]
        )
      );
    };

    return (
      <div className={classes.container}>
        <label className={classes.label}>{label}</label>
        <div className={classes.cover}>
          {keys.map((key) =>
            metaKeys[key] ? (
              <Icon name={metaKeys[key].icon} className={classes.icon} />
            ) : (
              <span>{"+" + key}</span>
            )
          )}
        </div>
        <input
          value=""
          className={classes.input}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onClick={() => setKeys([])}
        />
      </div>
    );
  }
);

const useStyle = createUseStyles({
  container: {
    position: "relative",
  },
  icon: {
    margin: "0px 1px 0px 1px",
  },
  label: {
    color: ({ darkMode }) => (darkMode ? colors.white : colors.black),
    display: "block",
    margin: "5px 0px 5px 0px",
  },
  cover: {
    position: "absolute",

    width: "100px",
    height: "26px",
    borderRadius: "13px",

    backgroundColor: colors.white,
    boxShadow: "inset 0px 0px 6px " + colors.dark,
    color: colors.black,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& *": {
      width: "min-content",
    },
  },
  input: {
    opacity: 0,
    cursor: "pointer",
    width: "100px",
    height: "26px",
    borderWidth: "0px",
    "&:focus": {
      outline: "none",
    },
  },
});

export default ShortcutInput;
