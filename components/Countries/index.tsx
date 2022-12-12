import { ICountry } from "../../@types";
import Card from "../Card";
import { Container } from "./style";

interface Props {
  countries: ICountry[];
}

const Countries = ({ countries }: Props): JSX.Element => {
  return (
    <Container
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {countries.map((country) => {
        return (
          <Card
            href={`/country/${country.alpha3Code.toLocaleLowerCase()}`}
            key={country.name}
            name={country.name}
            linkIMG={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      })}
    </Container>
  );
};

export default Countries;
