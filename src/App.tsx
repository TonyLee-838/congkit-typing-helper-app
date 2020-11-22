import React, { useEffect, useState } from "react";
import Keyboard from "./Keyboard";

function App() {
  const [key, setKey] = useState("");
  useEffect(() => {
    document.onkeydown = (ev) => setKey(ev.key);
    document.onkeyup = () => setKey("");
  }, []);

  return (
    <div className="App">
      <Keyboard clicked={key} />
    </div>
  );
}

export default App;
