import {
  Container,
  ContentInfo,
  ImageFlag,
  NameCountry,
  RestInfo,
} from "./style";

interface Props {
  name: string;
  linkIMG: string;
  population: number;
  capital: string;
  region: string;
}

const Card = ({
  name,
  capital,
  population,
  region,
  linkIMG,
}: Props): JSX.Element => {
  return (
    <Container>
      <ImageFlag src={linkIMG} />
      <ContentInfo>
        <NameCountry>{name}</NameCountry>
        <RestInfo>
          <span>Population:</span> {population}
        </RestInfo>
        <RestInfo>
          <span>Region:</span> {region}
        </RestInfo>
        <RestInfo>
          <span>Capital:</span> {capital}
        </RestInfo>
      </ContentInfo>
    </Container>
  );
};

export default Card;
