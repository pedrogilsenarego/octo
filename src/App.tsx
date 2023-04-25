
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
import { Helmet } from "react-helmet"



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
      <Helmet>
        <title>OCTO • Born Octomistic </title>
        <meta name="description" content="Baby Brand • We are moms, dads and kids with no strings attached." />
      </Helmet>
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
