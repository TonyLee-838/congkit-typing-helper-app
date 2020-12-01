import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import SideBar from "./components/sidebar/SideBar";
import Keyboard from "./components/keyboard/Keyboard";
import Memo from "./components/memo/Memo";
import SearchBox from "./components/search-box/SearchBox";
import generateIfFileMissing from "../db/api/init";
import SettingPanel from "./components/setting-panel/SettingPanel";
import ContextProvider from "./stores/context";

function App() {
  const classes = useStyle();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [buttonSelected, setButtonSelected] = useState<ControlButtonType>("");

  //get keyboard info from local db when keyboard is initializing
  useEffect(() => {
    generateIfFileMissing();
  }, []);

  const handleButtonSelect = (button: ControlButtonType) => {
    button === buttonSelected
      ? setButtonSelected("")
      : setButtonSelected(button);
  };

  return (
    <div className={`App ${classes.container} `}>
      <ContextProvider>
        <Keyboard
          listenToKeyboard={!buttonSelected}
          onSidebarKeyClick={() => {
            setIsSidebarExpanded(!isSidebarExpanded);
          }}
        />
        <SideBar
          isExpanded={isSidebarExpanded}
          onSelect={handleButtonSelect}
          buttonSelected={buttonSelected}
        />
        <Memo expanded={buttonSelected === "memo"} />
        <SearchBox expanded={buttonSelected === "search"} />
        <SettingPanel expanded={buttonSelected === "setting"} />
      </ContextProvider>
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
