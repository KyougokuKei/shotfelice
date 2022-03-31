import "../styles/globals.css";
import "../styles/lib/reset.css";
import "../styles/lib/loading_animation.css";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";
import { GeneralHeader } from "../components/header/GeneralHeader";
import { Footer } from "../components/footer/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {router.route !== "/" && <GeneralHeader />}
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
