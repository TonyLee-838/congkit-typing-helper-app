import React, { useState } from "react";

import SideBar from "./sidebar/SideBar";
import Keyboard from "./keyboard/Keyboard";
import { createUseStyles } from "react-jss";
import Memo from "./Memo";

type ControlButtonType = "memo" | "setting" | "exit" | "";

function App() {
  const classes = useStyle();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [buttonSelected, setButtonSelected] = useState<ControlButtonType>("");

  const handleButtonSelect = (button: ControlButtonType) => {
    button === buttonSelected
      ? setTimeout(() => {
          setButtonSelected("");
        }, 300)
      : setButtonSelected(button);
  };

  return (
    <div className={`App ${classes.container} `}>
      <Keyboard
        isTransparent={isTransparent}
        onSidebarKeyClick={() => {
          setIsSidebarExpanded(!isSidebarExpanded);
          setIsTransparent(false);
        }}
        onTransparencyKeyClick={() => setIsTransparent(!isTransparent)}
      />
      <SideBar isExpanded={isSidebarExpanded} onSelect={handleButtonSelect} />
      {buttonSelected === "memo" && <Memo />}
    </div>
  );
}

const useStyle = createUseStyles({
  container: {
    display: "flex",
    backgroundColor: "transparent",
    padding: "30px",
  },
});

export default App;
