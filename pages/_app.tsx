// import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { useDarkMode } from "../hooks/useDarkMode";

export default function App({ Component, pageProps }: AppProps) {
  const [theme] = useDarkMode();

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? dark : light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
