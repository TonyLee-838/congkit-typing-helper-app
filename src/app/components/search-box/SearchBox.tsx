import React, { FC, ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import ExpandableDiv, { ExpandableProps } from "../common/ExpandableDiv";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import { queryCharacter } from "../../../db/api/dictionary";
import getKeyMap from "../../helper/getKeyMap";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

interface SearchBoxProps extends ExpandableProps {
  keys: KeyInfo[][];
}

const SearchBox: FC<SearchBoxProps> = ({ expanded, keys }): ReactElement => {
  const [results, setResult] = useState<SearchResultType[]>([]);
  const [keyMap, setKeyMap] = useState<KeyMapType>({});
  const classes = useStyle();

  useEffect(() => {
    setKeyMap(getKeyMap(keys));
  }, [keys]);

  const handleSearch = (terms: string) => {
    const result: SearchResultType[] = [];
    terms.split("").forEach((term) => {
      const codeAlphanumeric: string[] = queryCharacter(term).split("");
      const codeChinese = codeAlphanumeric.map(
        (letter) => keyMap[letter.toUpperCase()]
      );
      result.push({ term, codeAlphanumeric, codeChinese });
    });
    setResult(result);
  };

  const handleAddToMemo = () => {};

  return (
    <ExpandableDiv expanded={expanded}>
      <div className={classes.container}>
        <SearchInput
          onSearch={handleSearch}
          onAddToMemo={handleAddToMemo}
          onClear={() => setResult([])}
        />
        <h3 className={classes.info}>
          {results.length ? "搜尋結果:" : "請輸入要搜尋的字/詞彙:"}
        </h3>
        <div className={classes.results}>
          {results.map((result, i) => (
            <SearchResult key={i} result={result} />
          ))}
        </div>
      </div>
    </ExpandableDiv>
  );
};

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
