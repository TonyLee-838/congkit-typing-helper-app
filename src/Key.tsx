import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";

type IProps = {
  letter: string;
  character: string;
  isActive: boolean;
};

const Key: FC<IProps> = ({ isActive, letter, character }): ReactElement => {
  const classes = useStyle({ isActive });
  return (
    <div className={classes.container}>
      <div className={classes.letter}>{letter}</div>
      <div className={classes.character}>{character}</div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    backgroundColor: ({ isActive }) => (isActive ? "#079afa" : "#e4e4e4"),
    color: ({ isActive }) => (isActive ? "#f3f6f6" : "#0f1010"),
    boxShadow: "3px 3px 2px #7d7d7d",
    borderRadius: "5px",

    width: "50px",
    height: "50px",

    margin: "5px",
    padding: "5px",
    "& *": {
      fontSize: "1rem",
      fontWeight: "bolder",
      fontFamily: " Verdana, Geneva, sans-serif",
    },
  },
  character: {
    textAlign: "end",
  },
  letter: {},
});

export default Key;
