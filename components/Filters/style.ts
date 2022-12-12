import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  max-width: ${(props) => props.theme.width.maxWidth};
`;

export const MagniferSearch = styled(AiOutlineSearch)`
  margin-right: 16px;
`;

export const InputSearch = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  width: 100%;
  :focus {
    border: none;
    outline: none;
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const WrapperInput = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 12px 24px;
  width: 100%;
  max-width: 450px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
`;

export const Region = styled.select`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  padding: 12px 24px;
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;

  :focus {
    border: none;
    outline: none;
  }
`;

export const Option = styled.option`
  color: ${(props) => props.theme.colors.text};

  :hover {
    background-color: red;
  }
`;
