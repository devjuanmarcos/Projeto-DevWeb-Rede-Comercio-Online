import styled from 'styled-components';
import {Cactus, Pen, Car} from 'phosphor-react';

export const CardContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
background-color: #cac4ce;
`;
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5rem 8rem;
color: #333333;
`;


export const CardCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5rem;
@media only screen and (max-width:900px){
    flex-direction: column;
}
`;

export const CardCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 30rem;
height: 30rem;
background-color: #fff;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 20px;
transition: all .5s ease;
&:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px){
        margin-right: 10rem;
    }
    @media only screen and (min-width: 1500px){
        margin-right: 20rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
        margin-right: 0;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
}
@media only screen and (max-width:900px){
        width: 50rem;
}
@media only screen and (max-width:500px){
        width: 30rem;
}
@media only screen and (min-width:1890px){
        width: 40rem;
}
&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #9067c6;
    color: #fff;
    
}
`;

export const CardIconContainer = styled.div`
width: 9rem;
height: 9rem;
border-radius: 50%;
border: 2px solid #333;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
`;
export const CardIcon1 = styled(Cactus)`
color: #333;
font-size: 8rem;
`;

export const CardIcon2 = styled(Pen)`
color: #333;
font-size: 6rem;
`;
export const CardIcon3 = styled(Car)`
color: #333;
font-size: 6rem;
`;

export const CardCardTitle = styled.h3`
font-size: 2.4rem;
font-weight: bold;
padding-top: 1rem;
`;

export const CardCardText = styled.p`
font-size: 1.8rem;
padding: 1rem 2rem;
`;