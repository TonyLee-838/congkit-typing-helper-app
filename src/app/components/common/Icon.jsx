import * as BsIcons from "react-icons/bs";

import React from "react";
import { createUseStyles } from "react-jss";

const Icon = ({ name, className = "", onClick = null, ...props }) => {
  const classes = useStyle();
  const IconComponent = BsIcons[name];
  return (
    <IconComponent
      className={`${classes.icon} ${className} `}
      onClick={onClick}
      {...props}
    />
  );
};

const useStyle = createUseStyles({
  icon: {
    cursor: "pointer",
  },
});

export default Icon;
