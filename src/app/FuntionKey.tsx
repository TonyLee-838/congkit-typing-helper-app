import React, { ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import fontFamilies from "./config/fontFamily";
import Icon from "./Icon";

interface FunctionKeyProp {
  isTransparent: boolean;
  onClick: React.MouseEventHandler;
}

const FunctionKey = ({
  isTransparent,
  onClick,
}: FunctionKeyProp): ReactElement => {
  const [isActive, setIsActive] = useState(false);

  const classes = useStyle({ isActive, isTransparent });

  return (
    <div
      className={classes.container}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onClick={onClick}
    >
      <Icon name="BsEyeFill" className={classes.icon} />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    backgroundColor: ({ isActive }) => (isActive ? "#079afa" : "#e4e4e4"),
    color: ({ isActive }) => (isActive ? "#f3f6f6" : "#0f1010"),
    boxShadow: "3px 3px 2px #7d7d7d",
    borderRadius: "5px",
    opacity: ({ isActive, isTransparent }) =>
      isTransparent ? (isActive ? 1 : 0.45) : 1,
    display: "flex",
    width: "60%",
    height: "60%",
    margin: "5px",
    padding: "15px 5px 15px 5px",
    transition: "opacity 100ms ease",
    cursor: "pointer",
  },
  icon: {
    fontSize: "1.2rem",
    fontWeight: "bolder",
    fontFamily: fontFamilies.text,
  },
});

export default FunctionKey;
