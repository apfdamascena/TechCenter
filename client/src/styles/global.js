import {
    createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --FIRST-PRIMARY-COLOR: #1B284C;
        --SECOND-PRIMARY-COLOR: #FAC747;
        --COLOR-TEXT: #F4F4F4;
        --BUTTON-TEXT-COLOR: #1B284C;
        --WHITE-BACKGROUND: #E5E5E5;
        --BLACK: #000000; 
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: 0;
    }

    html {
        font-size: 62.5%;
    }

    html, body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: normal;
        color: var(--COLOR-TEXT);
        background: var(--WHITE---WHITE-BACKGROUND);
    }
`