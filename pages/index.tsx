import Head from "next/head";
import Header from "../components/Header";
import { useDarkMode } from "../hooks/useDarkMode";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

export default function Home() {
  const [theme, toggle] = useDarkMode();
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Head>
        <title>Tupis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header toggleTheme={toggle} theme={theme} />
    </ThemeProvider>
  );
}
