import styled from "styled-components";

export const Container = styled.div`
   display: grid;
   /* flex-direction:column; */
   justify-content:space-around; 
   align-items:center;
   width:33%;
   max-height:300px;
   padding: 1.5rem;
   padding-top: 0; 
   background: #242026;
   box-shadow: 0 5px 15px rgba(143, 124, 236, 0.7);
   border-radius: 10px;
   color: white;
   margin:10px;
   flex-wrap: wrap;

 button{   
   padding: 10px 10px;
    color: #CBBDDB;
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    letter-spacing: 1px;
    border: 1px solid #8F7CEC;
    margin: auto;
    border-radius:5px;   
   }
   button:hover{
      background: #8F7CEC;
    color: #fff;
      
    /* box-shadow: 0 0 5px #8F7CEC, 0 0 5px #8F7CEC, 0 0 20px #8F7CEC, 0 0 50px #8F7CEC; */
   }
`;