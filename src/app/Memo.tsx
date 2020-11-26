import React, { FC, ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import colors from "./config/color";

interface MemoProps {}

const Memo: FC<MemoProps> = (): ReactElement => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true);

    return () => setExpanded(false);
  }, []);

  const classes = useStyle({ expanded });
  return <div className={classes.container}></div>;
};

const useStyle = createUseStyles({
  container: {
    position: "absolute",
    width: ({ expanded }) => (expanded ? "77%" : "0%"),
    transition: "width 300ms ease",
    height: "195px",
    right: "75px",
    boxShadow: "3px 3px 3.5px" + colors.dark,

    backgroundColor: colors.medium,
  },
});

export default Memo;
