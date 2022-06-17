import "../styles/globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/style.css"
import { AppContextProvider } from "../src/components/AppContext"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#6667ab",
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default MyApp
