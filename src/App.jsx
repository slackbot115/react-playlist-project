import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import ReactPlayer from "react-player";
import Fab from "@mui/material/Fab";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div className="container">
          <GlobalStyles />
          <ReactPlayer
            url={[
              "https://www.youtube.com/watch?v=Jrg9KxGNeJY",
              "https://www.youtube.com/watch?v=N72U-NFu44k",
            ]}
            controls={true}
          />
        </div>
      </ThemeProvider>
      <h1 className="absolute bottom-4 right-4 md:bottom-10 md:right-8 flex flex-col items-end">
        <Fab>
          <DarkModeIcon onClick={() => setIsDarkTheme(!isDarkTheme)} />
        </Fab>
      </h1>
    </>
  );
}

export default App;
