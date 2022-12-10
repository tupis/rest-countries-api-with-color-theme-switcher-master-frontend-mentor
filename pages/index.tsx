import Head from "next/head";
import Header from "../components/Header";
import { useDarkMode } from "../hooks/useDarkMode";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { GetServerSideProps } from "next/types";
import { CountryServices } from "../services/index";
import { ICountry } from "../@types";
import { useState } from "react";
import Countries from "../components/Countries";
const { allCountry } = CountryServices;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const countries: ICountry[] = await allCountry();
  return {
    props: {
      countries,
    },
  };
};

interface Props {
  countries: ICountry[];
}

export default function Home({ countries }: Props) {
  const [allCountries] = useState(countries);
  const [theme, toggle] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Head>
        <title>Tupis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <Header toggleTheme={toggle} theme={theme} />
      <Countries countries={allCountries} />
    </ThemeProvider>
  );
}
