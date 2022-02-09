import '../styles/globals.css'
import '../styles/lib/reset.css'

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { theme } from "../lib/theme";
import { Header } from '../components/Header'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {router.route !== "/" && <Header />}
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>

    </>
  )
}

export default MyApp
