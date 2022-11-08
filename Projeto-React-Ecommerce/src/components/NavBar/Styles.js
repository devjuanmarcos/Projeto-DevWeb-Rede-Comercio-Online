import styled from "styled-components"

export const Container = styled.div`
    font-size:4rem;
    color: #9067c6;
    padding: 20px 20px;
    width: 100%;
    height:20%;
    background-color: #323242; 
    position: relative;
    margin-bottom: 10px;

img {
    width: 15%;
    height: 10%;
    display: inline-block; 
}   
    
#navbarSupportedContent {
    text-align: right; 
    }

ul {
    width:90%;
    display: flex;    
    list-style: none;
    padding: 0.5rem;
    flex-direction: inherit;
    align-self: right;
    gap:20px;
}

button {
    border-radius: 10px;
    flex-direction: row-reverse;
    font-size: 1.5rem;    
    position: relative;
    display: flex;
    padding: 12px;
    background-color: #fff;
    color: #302858;    
}

link {
    display:flex;
    background-color: blue;
    size: 5rem;
}

.container {
    height: 60px;
    background-color: yellow;
    color: #9067c6;
    padding: 5px 20px;
    display: flex;
    align-items: center;
}

.logo {
    display: flex;
    justify-content:first baseline;
    align-items: center;
    cursor: pointer;
}        

h1 {
    font-size: 100%;
    background: -webkit-linear-gradient(#ff0a6c, #2d27ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

}

.nav-item {
    width: 20%;
    height: 5%;
}

`;
