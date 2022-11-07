import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/Auth"
import { Perfil } from "../Perfil/perfil"

export function Home() {
   const { signOut, user } = useContext(AuthContext)

   return (
      <div>
         <h1>Olá {user.nome_completo}</h1>
         <button onClick={() => signOut()}>Sair</button>
         <Link to="/perfil" >
            <h1>Seu Perfil Aqui</h1>
         </Link>
      </div>
   )
}
