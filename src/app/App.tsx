import React, { useState } from "react";

import SideBar from "./sidebar/SideBar";
import Keyboard from "./keyboard/Keyboard";
import { createUseStyles } from "react-jss";

function App() {
  const classes = useStyle();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

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
      <SideBar isExpanded={isSidebarExpanded} />
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
