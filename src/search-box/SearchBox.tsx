import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import ExpandableDiv, { ExpandableProps } from "../app/common/ExpandableDiv";
import SearchInput from "./SearchInput";

interface SearchBoxProps extends ExpandableProps {}

const SearchBox: FC<SearchBoxProps> = ({ expanded }): ReactElement => {
  const classes = useStyle();
  return (
    <ExpandableDiv expanded={expanded}>
      <div className={classes.container}>
        <SearchInput />
      </div>
    </ExpandableDiv>
  );
};

const useStyle = createUseStyles({
  container: {
    padding: "10px",
  },
});

export default SearchBox;
