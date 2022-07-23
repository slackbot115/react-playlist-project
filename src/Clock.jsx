import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import ReactPlayer from "react-player";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div style={{ fontSize: "55px", margin: "60px" }}>{clockState}</div>;
}

export default Clock;
