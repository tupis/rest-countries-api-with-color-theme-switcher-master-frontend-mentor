import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.theme.width.maxWidth};
  margin: auto;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  padding: 8px 24px;
  margin: 2rem 0;
  cursor: pointer;
`;
