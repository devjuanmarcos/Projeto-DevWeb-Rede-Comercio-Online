import { useContext } from "react"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import AuthContext from "../../context/Auth"
import { Perfil } from "../Perfil/perfil"
import NavBar from "../../components/NavBar/NavBar"
import Card from "../../components/Card/Card"

export function Home() {
   const { signOut, user } = useContext(AuthContext)

   return (
      <>
      <NavBar />
      <div>
         <h1>Olá {user.nome_completo}</h1>
         <button onClick={() => signOut()}>Sair</button>
         <Link to="/perfil" >
            <h1>Seu Perfil Aqui</h1>
         </Link>
      </div>
      <Hero />
      <Card />
      <Footer />
      </>
   )
}
