import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import SideBar from "./components/sidebar/SideBar";
import Keyboard from "./components/keyboard/Keyboard";
import Memo from "./components/memo/Memo";
import SearchBox from "./components/search-box/SearchBox";
import { getKeyInfo } from "../db/api/keyInfo";
import generateIfFileMissing from "../db/api/init";
import SettingPanel from "./components/setting-panel/SettingPanel";
// import dbInit from "./db/api/init";

function App() {
  const classes = useStyle();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [buttonSelected, setButtonSelected] = useState<ControlButtonType>("");

  const [keys, setKeys] = useState<KeyInfo[][]>([]);

  //get keyboard info from local db when keyboard is initializing
  useEffect(() => {
    generateIfFileMissing();
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
      <SettingPanel expanded={buttonSelected === "setting"} />
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
