import { House, Notepad, ShoppingCart, SignIn, SignOut, TrademarkRegistered, User } from "phosphor-react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { Container } from "./Styles"
import Logo from "../../assets/logo.png"
import { useContext } from "react"
import AuthContext from "../../context/Auth"
import { CartState } from "../../context/Context"
import { Header } from "../Header/header"

function NavBar() {
   const { signOut } = useContext(AuthContext)
   const navigate = useNavigate()

   const {
      state: { products },
   } = CartState()

   function redirectHome() {
      navigate("/")
   }

   return (
      <Container>
         <div className="container">
            <div className="logo">
               <img src={Logo} alt="logo" />
               <h1 onClick={redirectHome}>CyberShopp</h1>
            </div>

            <a
               className="navbar-toggler"
               onClick={function () {
                  setTimeout(function () {
                     animation()
                  })
               }}
               type="button"
               data-toggle="collapse"
               data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="true"
               aria-label="Toggle navigation"></a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <Link to="/">
                        <button className="nav-link">
                           <House></House>Home
                        </button>
                     </Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/cadastro">
                        <button className="nav-link">
                           <User></User>Cadastro
                        </button>
                     </Link>
                  </li>

                  <li className="nav-item">
                     <Link to="/login">
                        <button className="nav-link">
                           <SignIn></SignIn>Login
                        </button>
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/carrinho">
                        <button className="nav-link">
                           <Header/>Cart
                        </button>
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/contato">
                        <button className="nav-link">
                           <Notepad></Notepad>Contato
                        </button>
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/">
                        <button onClick={signOut} className="nav-link">
                           <SignOut></SignOut>sair
                        </button>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </Container>
   )
}

export default NavBar
