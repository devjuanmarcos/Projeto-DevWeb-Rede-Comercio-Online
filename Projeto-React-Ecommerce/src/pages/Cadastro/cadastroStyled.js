import  styled  from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100vh;
    padding: 2.5vh 5vw;
    background-color: var(--cor-background);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 5vh 5vw;
    border: 1px solid var(--cor-roxo-secundario);
    border-radius: 30px;
    background-color: var(--cor-roxo-primario);
    box-shadow: 0 0 4rem 0rem #DEC6F691;

    .row{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin: 0.5rem 0.3rem;
        background-color: transparent;

        label{
            margin: 0.1rem 0.5rem;

        }
    }
    
    input{
        width: 100%;
        background-color: #DEC6F691;
        box-shadow: 0.1rem 0.1rem 0.5rem 0 var(--cor-background) inset;  
    }

    button{
        border-radius: 30px;
    }
`;