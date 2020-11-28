import React, { useState } from "react";

import SideBar from "./sidebar/SideBar";
import Keyboard from "./keyboard/Keyboard";
import { createUseStyles } from "react-jss";
import Memo from "./memo/Memo";
import SearchBox from "../search-box/SearchBox";
// import dbInit from "./db/api/init";

function App() {
  const classes = useStyle();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [buttonSelected, setButtonSelected] = useState<ControlButtonType>("");

  const handleButtonSelect = (button: ControlButtonType) => {
    button === buttonSelected
      ? setButtonSelected("")
      : setButtonSelected(button);
  };

  return (
    <div className={`App ${classes.container} `}>
      <Keyboard
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
      <SearchBox expanded={buttonSelected === "search"} />
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
