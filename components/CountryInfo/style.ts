import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${(props) => props.theme.width.maxWidth};
  color: ${(props) => props.theme.colors.text};
  margin: auto;
  height: 90vh;
`;

export const FlagImage = styled.img`
  width: 100%;
  max-width: 600px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 45%;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: space-between;
  width: 100%;
`;

export const UniqueInfo = styled.p`
  margin-bottom: 0.5rem;

  span {
    font-weight: 600;
  }
`;

export const PrimaryInfo = styled.div``;

export const SecondaryInfo = styled.div``;

export const BorderCountries = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 5rem;
  span {
    margin: 5px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding: 3px 30px;
  }
`;
