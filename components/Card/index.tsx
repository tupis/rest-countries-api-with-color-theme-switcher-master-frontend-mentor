import {
  Wrapper,
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
  href: string;
}

const Card = ({
  name,
  capital,
  population,
  region,
  linkIMG,
  href,
}: Props): JSX.Element => {
  return (
    <Container
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper href={href}>
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
      </Wrapper>
    </Container>
  );
};

export default Card;
