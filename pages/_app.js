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
    secondary: {
      main: "#929597",
    },
  },
})

function MyApp({ Component, pageProps, ...otherProps }) {
  return (
    <AppContextProvider pageComponent={Component} router={otherProps.router}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default MyApp
