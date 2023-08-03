

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    html, body, section, main {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        background-color: ${props => props.theme.color.white};
        color: ${props => props.theme.color.black};
    }

    * {
        box-sizing: border-box;
        font-family: ${ props => props.theme.font.mainRegular};
    }

    h1, h2, h3, h4, h5, h6, p, label {
        margin: 0;
        padding: 0;
    }

`