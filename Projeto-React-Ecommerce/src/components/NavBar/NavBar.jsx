import React, {useEffect, useState} from 'react';
import { House, Notepad, ShoppingCart, SignIn, SignOut, TrademarkRegistered, User } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Container } from './Styles'
import Logo from '../../assets/logo.png'
import { useContext } from 'react';
import AuthContext from '../../context/Auth';



function NavBar() {
  const { signOut } = useContext(AuthContext)
  
    
   return (                     
        
    <Container> 
    <div className="container">             
      <div className="logo">
        <img src={Logo} alt="logo" />
          
            <h1>
              <link to="/"></link> 
              <li> CyberShop 2077 </li>             
            </h1> 
            
      </div>

    <a       
      className="navbar-toggler"
      onClick={ function(){
       setTimeout(function(){ animation(); });
      }}
      type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="true" 
      aria-label="Toggle navigation">      
    </a>

    <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">        
                      
            <li className="nav-item">
              <Link to="/">
                <button className="nav-link" to="/" exact>
                  <House>                              
                  </House>Home                 
                </button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cadastro">
                <button className="nav-link" to="/about" exact>
                  <User>                  
                  </User>Cadastro
                </button> 
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login">
                <button className="nav-link" to="/service" exact>
                 <SignIn>
                  </SignIn>Login
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">
               <button className="nav-link" to="/cart" exact>
                  <ShoppingCart>
                  </ShoppingCart>Cart
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato">
              <button className="nav-link" to="/contato" exact>
                <Notepad>
                </Notepad>Contato
              </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <button onClick={signOut} className="nav-link" to="/" exact>
                 <SignOut>
                  </SignOut>sair
               </button> 
              </Link>
            </li>
        </ul>
      </div>
  </div>

</Container>
     
  );    
}

export default NavBar;