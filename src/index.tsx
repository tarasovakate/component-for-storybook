import ReactDOM from "react-dom"
import App from "./App"
import { createTheme, ThemeProvider } from "@mui/material/styles"

export const theme = createTheme({
  palette: {
    secondary: {
      light: "#65E9D9",
      main: "#65E9D9",
      contrastText: "#ffffff"
    }
  }
})
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
