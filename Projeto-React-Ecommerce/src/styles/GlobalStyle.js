import {createGlobalStyle} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`

    :root{
        --cor-background: #323242;
        --cor-highlight: #DEC6F6;
        --cor-roxo-primario: #6040B4;
        --cor-roxo-secundario: #33167b;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input, textarea{
        cursor: text;
        padding: 0.3rem 0.8rem;
        border: 0;
        border-radius: 15px;
        outline: none;
    }

    button, a{
        text-decoration: none;
        border: 0;
        outline: 0;
        cursor: pointer;
    }
`;