import {
  Wrapper,
  Container,
  ThemeTogglerButton,
  Title,
  IconMoon,
  IconMoonFill,
} from "./style";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useEffect } from "react";

interface Props {
  toggleTheme: () => void;
  theme: "dark" | "light";
}

const Header = ({ toggleTheme, theme }: Props): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Title>Where in the world?</Title>
        <ThemeTogglerButton onClick={toggleTheme}>
          {theme === "dark" ? <IconMoonFill /> : <IconMoon />}
          Toggle Theme
        </ThemeTogglerButton>
      </Container>
    </Wrapper>
  );
};

export default Header;
