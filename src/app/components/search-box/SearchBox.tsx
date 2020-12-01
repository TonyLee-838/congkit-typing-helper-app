import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import { observer } from "mobx-react-lite";
import { action } from "mobx";

import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import ExpandableDiv from "../common/ExpandableDiv";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import { GlobalStateContext, SearchContext } from "../../stores/context";

const SearchBox: FC = observer(
  (): ReactElement => {
    const globalStateStore = useContext(GlobalStateContext);
    const searchStore = useContext(SearchContext);

    const classes = useStyle();
    const handleAddToMemo = () => {};

    return (
      <ExpandableDiv expanded={globalStateStore.selectedButton === "search"}>
        <div className={classes.container}>
          <SearchInput
            onSearch={action((value: string) => searchStore.search(value))}
            onAddToMemo={handleAddToMemo}
            onClear={action(() => searchStore.clear())}
          />
          <h3 className={classes.info}>
            {searchStore.hasNoResult() ? "請輸入要搜尋的字/詞彙:" : "搜尋結果:"}
          </h3>
          <div className={classes.results}>
            {searchStore.results.map((result, i) => (
              <SearchResult key={i} result={result} />
            ))}
          </div>
        </div>
      </ExpandableDiv>
    );
  }
);

const useStyle = createUseStyles({
  container: {
    padding: "10px",
  },
  info: {
    margin: "3px 0px 5px 0px",
    fontStyle: "italic",
    fontFamily: fontFamilies.text,
    color: colors.dark,
  },
  results: {
    overflow: "scroll",
  },
});

export default SearchBox;
