import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
