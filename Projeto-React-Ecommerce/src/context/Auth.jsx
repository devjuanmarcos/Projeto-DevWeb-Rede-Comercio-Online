import React, { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import clienteService from "../services/requests/clienteService"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   const [user, setUser] = useState({})
   const [userId, setUserId] = useState(0)
   const [usuarios, setUsuarios] = useState([])
   const navigate = useNavigate()

   async function getClientes() {
      clienteService
         .getAllClientes()
         .then(response => {
            setUsuarios(response.data)
         })
         .catch(error => {
            console.log("erro ao carregar a lista de usuarios  - " + error)
         })
   }

   // login automático
   useEffect(() => {
      async function loadStorageData() {
         const storageIsAuthenticated = await localStorage.getItem("@authenticated")
         const storageUserId = await localStorage.getItem("@userId")
         const storageUser = await JSON.parse(localStorage.getItem("@userObject"))

         if (storageIsAuthenticated && storageUserId) {
            setIsAuthenticated(true)
            setUserId(storageUserId)
            setUser(storageUser)
         }
      }

      loadStorageData()
   }, [])

   function signInDB(email, password) {
      getClientes()

      usuarios.map((usuario) => {
         if (email === usuario.email) {
            if (password === usuario.cpf) {
               localStorage.setItem("@authenticated", true)
               localStorage.setItem("@userObject", JSON.stringify(usuario))
               localStorage.setItem("@userId", usuario.id_cliente)
               localStorage.setItem("@userName", usuario.nome_completo)
               setUser(usuario)
               setUserId(usuario.id_cliente)
               setIsAuthenticated(true)
               
               navigate("/")
            }
         }
      })
   }

   function signOut() {
      setIsAuthenticated(false)
      setUser("")
      localStorage.clear()
   }

   return (
      <AuthContext.Provider
         // tudo o que por dentro de value o código pode acessar pelo useContext
         value={{
            isAuthenticated,
            signInDB,
            signOut,
            setUser,
            user,
            userId,
            setUserId
         }}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthContext
