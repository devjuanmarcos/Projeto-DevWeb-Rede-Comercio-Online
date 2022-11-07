import React, {useEffect, useState} from 'react';
import { Notepad, ShoppingCart, SignIn, SignOut, TrademarkRegistered, User } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Container } from './Styles'


function NavBar() {
  
    
   return (                     
        
    <Container> 
    <div className="container">             
      <div className="logo">
        <img src="../../assets/image/logo.jpeg" />
       CyberShop 2077       
      </div>

    {/* <button       
      className="navbar-toggler"
      onClick={ function(){
       setTimeout(function(){ animation(); });
      }}
      type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="true" 
      aria-label="Toggle navigation">      
    </button> */}

    <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">        
                      
            <li className="nav-item">
              <button className="nav-link" to="/" exact>
                <link>
                {/* link para Home */}
                </link>Home 
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link" to="/about" exact>
                <User>
                </User>Cadastro
              </button> 
            </li>

            <li className="nav-item">
              <button className="nav-link" to="/service" exact>
                <SignIn>
                </SignIn>Login
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" to="/testimonial" exact>
                <ShoppingCart>
                </ShoppingCart>Cart
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" to="/contact" exact>
                <Notepad>
                </Notepad>Contato
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" to="/about" exact>
                <SignOut>
                </SignOut>sair
              </button> 
            </li>
        </ul>
      </div>
  </div>

</Container>
     
  );
    
}

export default NavBar;