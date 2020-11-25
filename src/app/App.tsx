import React, { useState } from "react";
import Keyboard from "./Keyboard";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  return (
    <div className="App">
      <Keyboard
        isTransparent={isTransparent}
        onSidebarKeyClick={() => {
          setIsSidebarExpanded(!isSidebarExpanded);
          setIsTransparent(false);
        }}
        onTransparencyKeyClick={() => setIsTransparent(!isTransparent)}
      />
      {isSidebarExpanded && <div>Sidebar</div>}
    </div>
  );
}

export default App;
