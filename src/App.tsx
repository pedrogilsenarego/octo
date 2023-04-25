
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
import ScrollLock from "./hoc";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'



const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Termina',
      textTransform: 'none',
      fontSize: 16,
      color: Colors.BLACKISH,
      caretColor: "transparent",

    },
  },
});



function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <QueryClientProvider client={queryClient}>
            <CookiePolicy />
            {/* //<Snackbar /> */}
            <CssBaseline />
            <ScrollToTop />
            <ScrollLock>
              <AppRoutes />
            </ScrollLock>
            {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
          </QueryClientProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
