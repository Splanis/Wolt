import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,   
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Notable", sans-serif;
    }
`;

export default GlobalStyles;
