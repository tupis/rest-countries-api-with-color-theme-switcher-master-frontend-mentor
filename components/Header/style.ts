import styled from "styled-components";

export const Wrapper = styled.header`
  background-color: hsl(0, 0%, 100%);
  width: 100%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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

export const DarkMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ThemeTogglerButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: none;
`;

export const IconTheme = styled.div`
  background-color: black;
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
