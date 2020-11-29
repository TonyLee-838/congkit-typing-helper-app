import React, { ReactElement } from "react";
import { createUseStyles } from "react-jss";
import fontFamilies from "../../config/fontFamily";
import Icon from "../common/Icon";
import Key, { KeyProps } from "./Key";

interface FunctionKeyProp extends KeyProps {
  icon: string;
}

const FunctionKey = ({
  isTransparent,
  icon,
  isActive,
  onActivate,
  onDeactivate,
}: FunctionKeyProp): ReactElement => {
  const classes = useStyle();

  return (
    <Key
      onActivate={onActivate}
      onDeactivate={onDeactivate}
      isTransparent={isTransparent}
      isActive={isActive}
      className={classes.container}
    >
      <Icon name={icon} className={classes.icon} />
    </Key>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2.5px 5px 2.5px 5px",
  },
  icon: {
    fontSize: "0.9rem",
    fontWeight: "bolder",
    fontFamily: fontFamilies.text,
  },
});

export default FunctionKey;
