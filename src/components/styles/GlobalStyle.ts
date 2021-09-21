import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #24292f;
    }
`;

export default GlobalStyle;
