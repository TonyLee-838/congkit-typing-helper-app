import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import ExpandableDiv, { ExpandableProps } from "../common/ExpandableDiv";
import { queryCharacter } from "../db/api/dictionary";
import SearchInput from "./SearchInput";

interface SearchBoxProps extends ExpandableProps {}

const SearchBox: FC<SearchBoxProps> = ({ expanded }): ReactElement => {
  const classes = useStyle();

  const handleSearch = (term: string) => {
    console.log(queryCharacter(term));
  };

  const handleAddToMemo = () => {};

  return (
    <ExpandableDiv expanded={expanded}>
      <div className={classes.container}>
        <SearchInput onSearch={handleSearch} onAddToMemo={handleAddToMemo} />
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
