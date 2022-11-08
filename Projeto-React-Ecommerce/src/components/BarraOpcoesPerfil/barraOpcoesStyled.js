import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 25%;
   height: 100%;
   min-width: 150px;
   padding: 2rem 1rem;
   color: var(--cor-highlight);
   background-color: #131315;
   position: sticky;
   top: 0;
   left: 0;

   .btn-menu {
      display: flex;
      flex-direction: column;

      button {
          width: 10vw;
         margin: 1rem;
         padding: 1rem 0.5rem;
         border-radius: 30px;
      }
   }

   .voltar button {
      width: 10vw;
      padding: 1rem 0.5rem;
      border-radius: 30px;
   }
`
