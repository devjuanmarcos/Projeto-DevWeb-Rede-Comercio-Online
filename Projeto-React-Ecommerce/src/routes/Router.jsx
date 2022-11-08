import { useContext } from "react"
import AuthContext from "../context/Auth"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Login } from "../pages/Login/Login"
import { Cadastro } from "../pages/Cadastro/Cadastro"
import { Perfil } from "../pages/Perfil/perfil"
import { PageNotFound } from "../pages/PageNotFound/404"
import { Contato } from "../pages/Contato/Contato"

export function Router() {
   const { isAuthenticated } = useContext(AuthContext)

   if (!isAuthenticated) {
      return (
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
         </Routes>
      )
   }

   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/perfil" element={<Perfil />} />
         <Route path="/contato" element={<Contato />} />
         <Route path=" * " element={<PageNotFound />} />
      </Routes>
   )


}
