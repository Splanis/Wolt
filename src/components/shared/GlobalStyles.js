import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,   
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
    }
`;

export default GlobalStyles;
