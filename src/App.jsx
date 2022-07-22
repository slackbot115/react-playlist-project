import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import axios from "axios";

function App() {
  const playerRef = React.useRef();

  const onSkip = React.useCallback(() => {
    const timeToSkip =
      playerRef.current.getDuration() - playerRef.current.getCurrentTime();
    playerRef.current.seekTo(timeToSkip, "seconds");
  }, [playerRef.current]);

  const [videosState, setVideosState] = useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/", {
        mode: "cors",
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => {
        setVideosState(res.data);
      });
  }, []);

  return (
    <div className="App">
      <Clock></Clock>

      <ReactPlayer
        ref={playerRef}
        url={[
          "https://www.youtube.com/watch?v=Jrg9KxGNeJY",
          "https://www.youtube.com/watch?v=N72U-NFu44k",
        ]}
        controls={true}
        playing={true}
        muted={false}
        onPause={onSkip}
      />
    </div>
  );
}

export default App;
