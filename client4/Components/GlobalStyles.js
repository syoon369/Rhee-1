import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }

    ul, li, ol {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Courier New', Courier, monospace;
        font-size: 12px;
        padding-top: 80px;
    }
`;

export default globalStyles;