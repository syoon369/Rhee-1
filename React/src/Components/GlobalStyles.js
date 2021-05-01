import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};
body{
    margin:0;
    padding:0;
    font-family:sans-serif;
    background:#f9f9f9;
    text-align:center;
}
`;

export default GlobalStyles;