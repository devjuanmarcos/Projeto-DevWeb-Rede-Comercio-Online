import React, { createContext, useEffect, useState } from "react"
import clienteService from "../services/requests/clienteService"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   const [user, setUser] = useState("")
   const [userId, setUserId] = useState(0)
   const [usuarios, setUsuarios] = useState([])

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
         const storageUser = await localStorage.getItem("@userId")

         if (storageIsAuthenticated && storageUser) {
            setIsAuthenticated(true)
            setUserId(storageUser)
         }
      }

      loadStorageData()
   }, [])

   // aqui tem que ajeitar para poder puxar as informações da API
   function signIn(email, password) {
      if (email === "marcelle@gmail.com" && password === "123456") {
         localStorage.setItem("@authenticated", true)
         localStorage.setItem("@user", "Marcelle")
         setIsAuthenticated(true)
         setUserName("Marcelle")
         return
      }
   }

   function signInDB(email, password) {
      getClientes()

      usuarios.map((usuario) => {
         if (email === usuario.email) {
            if (password === usuario.cpf) {
               localStorage.setItem("@authenticated", true)
               localStorage.setItem("@userId", usuario.id_cliente)
               localStorage.setItem("@userName", usuario.nome_completo)
               setUser(usuario)
               setUserId(usuario.id_cliente)
               setIsAuthenticated(true)
               return
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
            user
         }}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthContext
