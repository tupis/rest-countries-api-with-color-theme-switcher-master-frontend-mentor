import { useEffect, useState } from "react";
import { ICountry } from "../../@types";
import { CountryServices } from "../../services";

import {
  Container,
  FlagImage,
  Infos,
  PrimaryInfo,
  SecondaryInfo,
  Title,
  Content,
  UniqueInfo,
  BorderCountries,
} from "./style";

interface Props {
  country?: ICountry;
}

const CountryInfo = ({ country }: Props): JSX.Element => {
  const { Country } = CountryServices;
  const [border, setBorder] = useState<[] | string[]>([]);

  useEffect(() => {
    if (country!.borders) {
      Promise.all(
        country!.borders.map((border) => Country(border.toLocaleLowerCase()))
      ).then((res) => setBorder(res.map((country) => country.name)));
    }
  }, [country]);

  return (
    <>
      {!country ? (
        <Container
          style={{
            justifyContent: "center",
            height: "50vh",
            alignItems: "center",
          }}
        >
          <Title>Pais inexistente</Title>
        </Container>
      ) : (
        <Container>
          <FlagImage src={country.flags.png} />

          <Content>
            <Title>{country.name}</Title>
            <Infos>
              <PrimaryInfo>
                <UniqueInfo>
                  <span>Native Name: </span>
                  {country.nativeName}
                </UniqueInfo>
                <UniqueInfo>
                  <span>Population: </span>
                  {country.population}
                </UniqueInfo>
                <UniqueInfo>
                  <span>Region: </span>
                  {country.region}
                </UniqueInfo>
                <UniqueInfo>
                  <span>Sub Region: </span>
                  {country.subregion}
                </UniqueInfo>
                <UniqueInfo>
                  <span>Capital: </span>
                  {country.capital}
                </UniqueInfo>
              </PrimaryInfo>

              <SecondaryInfo>
                <UniqueInfo>
                  <span>Top Level Domain </span>
                  {country.topLevelDomain}
                </UniqueInfo>
                <UniqueInfo>
                  <span>Currencies: </span>
                  {country.currencies.map((cur, index) => {
                    if (index === country.currencies.length - 1) {
                      return cur.name;
                    } else {
                      return `${cur.name}, `;
                    }
                  })}
                </UniqueInfo>
                <UniqueInfo>
                  <span>Languages: </span>
                  {country.languages.map((lang, index) => {
                    if (index === country.languages.length - 1) {
                      return lang.name;
                    } else {
                      return `${lang.name}, `;
                    }
                  })}
                </UniqueInfo>
              </SecondaryInfo>
            </Infos>

            {border.length > 0 && (
              <BorderCountries>
                Border Countries:{" "}
                {border!.map((border) => (
                  <span key={border}>{border}</span>
                ))}
              </BorderCountries>
            )}
          </Content>
        </Container>
      )}
    </>
  );
};

export default CountryInfo;
