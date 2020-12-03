import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import Icon from "../common/Icon";
import colors from "../../config/color";

import fontFamilies from "../../config/fontFamily";
import { GlobalStateContext } from "../../stores/context";

interface SearchResultProps {
  result: SearchResultType;
}

const SearchResult: FC<SearchResultProps> = ({ result }): ReactElement => {
  const { darkMode } = useContext(GlobalStateContext);
  const classes = useStyle({ darkMode });
  return (
    <div className={classes.result}>
      <div className={classes.char}>{result.term}</div>
      <div className={classes.alphanumeric}>
        {result.codeAlphanumeric.map((code) => (
          <span key={`a-${code}`} className={classes.code}>
            {code.toLocaleUpperCase()}
          </span>
        ))}
      </div>
      <div className={classes.chinese}>
        倉頡:
        {result.codeChinese.map((code) => (
          <span key={`c-${code}`} className={classes.code}>
            {code}
          </span>
        ))}
      </div>
      <div className={classes.chinese}>
        速成:
        {result.codeChinese.map((code, i) =>
          i === 0 || i === result.codeChinese.length - 1 ? (
            <span key={`s-${code}`} className={classes.code}>
              {code}
            </span>
          ) : null
        )}
      </div>
      <Icon name="BsStar" />
    </div>
  );
};

const useStyle = createUseStyles({
  result: {
    backgroundColor: ({ darkMode }) => (darkMode ? colors.dark : colors.medium),
    width: "95%",
    height: "max-content",
    display: "grid",

    padding: "3px 0px 3px 0px",
    gridTemplateColumns: "1fr 1.5fr 2fr 2fr 0.8fr",
    borderRadius: "3px",
    fontFamily: fontFamilies.text,
    alignItems: "center",
    marginBottom: "2px",
  },
  char: {
    fontSize: "1.7rem",
    fontStyle: "italic",
    margin: "0px 10px 0px 10px",
  },
  codeContainer: {},
  chinese: {},
  alphanumeric: {},
  code: {},
});

export default SearchResult;
