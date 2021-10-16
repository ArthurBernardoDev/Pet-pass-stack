import { createTheme } from "@material-ui/core";

export default createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    success: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: [
      '"Montserrat"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
