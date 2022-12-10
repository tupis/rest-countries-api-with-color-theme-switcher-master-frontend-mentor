import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans';
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
    }
`;
