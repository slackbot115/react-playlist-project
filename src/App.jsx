import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import axios from "axios";
import Player from "./Player";

function App() {
  const [clockState, setClockState] = useState();
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
      if (isToggled) {
        setIsToggled(false);
      } else {
        setIsToggled(true);
      }
    }, 10000);
  }, [isToggled]);

  return (
    <div className="App">
      {/* <button onClick={() => setIsToggled(!isToggled)}>Toggle</button> */}
      {/* {isToggled && <Player />} */}
      {isToggled && <h1>Olá</h1>}
    </div>
  );
}

export default App;
