import React, { useState } from "react";
import Keyboard from "./Keyboard";

function App() {
  const [transparency, setTransparency] = useState(true);

  return (
    <div className="App">
      <Keyboard
        isTransparent={transparency}
        onTransparencyChange={() => setTransparency(!transparency)}
      />
    </div>
  );
}

export default App;
