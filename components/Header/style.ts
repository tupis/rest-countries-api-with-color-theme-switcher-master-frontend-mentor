import styled from "styled-components";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
/*
BsFillMoonFill
BsMoon
*/

export const Wrapper = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.colors.text};
  padding: 10px 0;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-size: 1.5em;
`;

export const ThemeTogglerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.1em;
`;

export const IconMoon = styled(BsMoon)`
  width: 27px;
  height: 27px;
  margin-right: 8px;
`;

export const IconMoonFill = styled(BsFillMoonFill)`
  width: 27px;
  height: 27px;
  margin-right: 8px;
`;
