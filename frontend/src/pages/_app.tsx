import theme from "../styles/theme";
import "../styles/global.scss";

import { HeaderHome } from "../components/HeaderHome";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderHome />
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
