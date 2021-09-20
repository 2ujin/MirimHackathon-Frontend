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

    input:focus {
        color: black;
        //input 박스 테두리
        outline: none;
    }
    
`;

export default GlobalStyle;
