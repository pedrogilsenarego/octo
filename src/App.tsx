
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./utils/ScrollToTop";
import {
  StyledEngineProvider,
  CssBaseline,
  ThemeProvider, createTheme
} from "@mui/material";
import Snackbar from "./components/SnackBar";
import { Colors } from "./constants/pallete";
import CookiePolicy from "./presentional/CookiePopup";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Termina',
      textTransform: 'none',
      fontSize: 16,
      color: Colors.BLACKISH,
      caretColor: "transparent"
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CookiePolicy />
          <Snackbar />
          <CssBaseline />
          <ScrollToTop />
          <AppRoutes />
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
