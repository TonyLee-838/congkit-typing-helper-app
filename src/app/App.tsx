import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import _ from "lodash";

import SideBar from "./sidebar/SideBar";
import Keyboard from "./keyboard/Keyboard";
import Memo from "./memo/Memo";
import SearchBox from "./search-box/SearchBox";
import { getKeyInfo } from "./db/api/keyInfo";
// import dbInit from "./db/api/init";

function App() {
  const classes = useStyle();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [buttonSelected, setButtonSelected] = useState<ControlButtonType>("");

  const [keys, setKeys] = useState<KeyInfo[][]>([]);

  //get keyboard info from local db when keyboard is initializing
  useEffect(() => {
    const keys = getKeyInfo();
    setKeys(keys);
  }, []);

  const handleButtonSelect = (button: ControlButtonType) => {
    button === buttonSelected
      ? setButtonSelected("")
      : setButtonSelected(button);
  };

  return (
    <div className={`App ${classes.container} `}>
      <Keyboard
        keys={keys}
        isTransparent={isTransparent}
        listenToKeyboard={!buttonSelected}
        onSidebarKeyClick={() => {
          setIsSidebarExpanded(!isSidebarExpanded);
          setIsTransparent(false);
        }}
        onTransparencyKeyClick={() => setIsTransparent(!isTransparent)}
      />
      <SideBar
        isExpanded={isSidebarExpanded}
        onSelect={handleButtonSelect}
        buttonSelected={buttonSelected}
      />
      <Memo expanded={buttonSelected === "memo"} />
      <SearchBox expanded={buttonSelected === "search"} keys={keys} />
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    display: "flex",
    backgroundColor: "transparent",
    paddingTop: "35px",
  },
});

export default App;
