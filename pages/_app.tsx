import type { AppProps } from "next/app";
import GlobalContextProvider from "../context";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <GlobalContextProvider>
        {isMounted && <Component {...pageProps} />}
      </GlobalContextProvider>
    </>
  );
}
