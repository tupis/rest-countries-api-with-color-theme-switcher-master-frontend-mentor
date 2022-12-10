import { ICountry } from "../../@types";
import Card from "../Card";
import { Container } from "./style";

interface Props {
  countries: ICountry[];
}

const Contries = ({ countries }: Props): JSX.Element => {
  console.log(countries);

  return (
    <Container>
      {countries.map((country) => {
        return (
          <Card
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

export default Contries;
