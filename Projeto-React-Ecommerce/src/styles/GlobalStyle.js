import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --cor-background: #323242;
        --cor-highlight: #DEC6F6;
        --cor-roxo-primario: #6040B4;
        --cor-roxo-secundario: #6040B4;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input, textarea{
        cursor: text;
        outline: none;
    }

    button, a{
        cursor: pointer;
    }
`;