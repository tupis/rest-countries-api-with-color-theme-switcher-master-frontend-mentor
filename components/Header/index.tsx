import { NextPage } from "next";
import {
  DarkMode,
  Wrapper,
  Container,
  IconTheme,
  ThemeTogglerButton,
  Title,
} from "./style";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <Wrapper>
      <Container>
        <Title>Where in the world?</Title>
        <DarkMode>
          <IconTheme />
          <ThemeTogglerButton>Toggle Theme</ThemeTogglerButton>
        </DarkMode>
      </Container>
    </Wrapper>
  );
};

export default Header;
