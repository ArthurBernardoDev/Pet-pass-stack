// @ts-ignore
import { createTheme } from '@mui/material';

export default createTheme({
  palette: {
    primary: {
      main: "#FFF",
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
