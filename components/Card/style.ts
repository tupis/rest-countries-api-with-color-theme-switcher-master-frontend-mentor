import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const ImageFlag = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const NameCountry = styled.h1`
  font-weight: 800;
  font-size: 1.1em;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 6px;
`;

export const RestInfo = styled.p`
  font-size: 0.9em;
  color: ${(props) => props.theme.colors.text};

  span {
    font-weight: 600;
  }
`;
