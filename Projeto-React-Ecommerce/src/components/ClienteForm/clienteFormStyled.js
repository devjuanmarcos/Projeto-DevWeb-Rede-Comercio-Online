import styled from "styled-components"

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   position: absolute;
   top: 50%;
   left: 50%;
   width: 400px;
   padding: 1.5rem;
   padding-top: 0;
   transform: translate(-50%, -50%);
   background: #242026;
   box-shadow: 0 15px 25px rgba(143, 124, 236, 0.7);
   border-radius: 10px;
   margin-top: 8rem;

   h2 {
      height: 20%;
      margin: 1rem;
      top: 0;
      position: static;
      color: #fff;
      text-align: center;
   }

   .campos-cadastro {
      padding: 0.5rem 0;
      height: 60%;
      max-height: 55vh;
      overflow-y: scroll;

      ::-webkit-scrollbar {
         width: 10px;
      }

      ::-webkit-scrollbar-track {
         background: var(--cor-background);
         border-radius: 1rem;
      }

      ::-webkit-scrollbar-thumb {
         background: var(--cor-roxo-primario);
         border-radius: 1rem;
      }

      ::-webkit-scrollbar-thumb:hover {
         background: var(--cor-roxo-secundario);
      }

      .user-box {
         &:first-child input {
            margin-top: 0.5rem;
         }
      }

      .user-box input {
         position: relative;
         width: 100%;
         padding: 10px 0;
         font-size: 1rem;
         color: #fff;
         margin-bottom: 30px;
         border: none;
         border-radius: 0;
         border-bottom: 1px solid #fff;
         outline: none;
         background: transparent;

      }

      input::placeholder{
            opacity: 0;
            
         }

      .user-box label {
         position: relative;
         left: 0;
         top: -60px;
         padding: 0.125rem 0;
         font-size: 1rem;
         color: #fff;
         pointer-events: none;
         transition: 0.5s;
      }

      .user-box input:focus ~ label {
         top: -85px;
         left: 0;
         color: #8f7cec;
         font-size: 0.75rem;
      }

      .user-box input:not(:placeholder-shown) ~ label{
         top: -85px;
         left: 0;
         color: #8f7cec;
         font-size: 0.75rem;
      }

      .user-box {
         &:last-child label {
            margin-bottom: 0rem;
         }
      }
   }

   .button-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
      position: static;
      bottom: 0;
      height: 20%;
   }

   #submit {
      padding: 0.75rem 1rem;
      color: #cbbddb;
      font-size: 1rem;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: 0.5s;
      letter-spacing: 0.1rem;
      border: 1px solid #8f7cec;
      border-radius: 5px;
   }

   #submit:hover {
      background: #8f7cec;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #8f7cec, 0 0 25px #8f7cec, 0 0 50px #8f7cec, 0 0 100px #8f7cec;
   }

   #reset {
      padding: 0.75rem 1rem;
      color: #cbbddb;
      font-size: 1rem;
      text-decoration: none;
      text-transform: uppercase;
      border: 1px solid #8f7cec;
      border-radius: 5px;
   }
`
