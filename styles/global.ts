import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Nunito Sans", sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        background-color: hsl(0, 0%, 98%);
    }
`;
