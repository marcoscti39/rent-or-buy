import React from "react";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { theme } from "../themeColors";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
