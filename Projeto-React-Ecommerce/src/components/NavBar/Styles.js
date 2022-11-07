import styled from 'styled-components';

export const Container = styled.div`
    font-size:4rem;
    color: #9067c6;
    padding: 20px 20px;
    width: 100%;
    height:20%;
    background-color: #cac4ce;
    text-align: right;
    
    
#navbarSupportedContent {
    text-align: right;
    


    }

ul {
    width:90%;
    display: flex;
    ;
    list-style: none;
    padding: 0.5rem;
    flex-direction: inherit;
    align-self: right;
    gap:20px;

}

button {
    display:flexbox;
    border-radius: 10px;
    flex-direction: row-reverse;
    font-size: 1.5rem;
    ;
    position: relative;
    display: flex;
    padding: 12px;
    background-color: #8d86c9;
    color: #f7ece1;
    
}
link {
    display:flex;
    background-color: blue;
    size: 5rem;
}
.container {
    height: 60px
    background-color= yellow;
    color: #9067c6;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    }

     

    
`

export const BotaoNav = styled.span`    
    button{
        display: block-inline;
        margin: 0 10px 0 15px;
        background-color: #5c5ca8;
        color:  #fff;
        border-radius: 8px;
        border: 1px solid;
        
        &:hover{
          
            color: #5c5ca8;
            transition: 0.5s;
        }
    }
   
`;