import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";

import SideBar from "./components/sidebar/SideBar";
import Keyboard from "./components/keyboard/Keyboard";
import Memo from "./components/memo/Memo";
import SearchBox from "./components/search-box/SearchBox";
import SettingPanel from "./components/setting-panel/SettingPanel";
import ContextProvider from "./stores/context";
import { registerMovingWindowShortcut } from "./remote";

function App() {
  const classes = useStyle();

  useEffect(() => {
    registerMovingWindowShortcut();
  });
  return (
    <div className={`App ${classes.container} `}>
      <ContextProvider>
        <Keyboard />
        <SideBar />
        <Memo />
        <SearchBox />
        <SettingPanel />
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
