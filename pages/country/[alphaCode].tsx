import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { ThemeProvider } from "styled-components";
import { ICountry } from "../../@types";
import { CountryServices } from "../../services";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import GlobalStyle from "../../styles/global";
import { useDarkMode } from "../../hooks/useDarkMode";
import Header from "../../components/Header";
import CountryInfo from "../../components/CountryInfo";
import BackButton from "../../components/BackButton";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { alphaCode } = ctx.query;
  const { Country } = CountryServices;
  const countryInfo = await Country(String(alphaCode));
  return {
    props: {
      countryInfo,
    },
  };
};

interface Props {
  countryInfo: ICountry | undefined;
}

const Country = ({ countryInfo }: Props): JSX.Element => {
  const [theme, toggle] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Head>
        <title>Tupis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />

      <Header theme={theme} toggleTheme={toggle} />
      <BackButton />
      <CountryInfo country={countryInfo} />
    </ThemeProvider>
  );
};

export default Country;
