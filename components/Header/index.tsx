import {
  DarkMode,
  Wrapper,
  Container,
  IconTheme,
  ThemeTogglerButton,
  Title,
} from "./style";

interface Props {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Title>Where in the world?</Title>
        <DarkMode>
          <IconTheme />
          <ThemeTogglerButton onClick={toggleTheme}>
            Toggle Theme
          </ThemeTogglerButton>
        </DarkMode>
      </Container>
    </Wrapper>
  );
};

export default Header;
