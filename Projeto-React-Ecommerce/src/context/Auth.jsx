import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext ({});

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userName, setUserName] = useState ("")

    // login automático
    useEffect(() => {
        async function loadStorageData(){
            const storageIsAuthenticated = await localStorage.getItem('@authenticated');
            const storageUserName = await localStorage.getItem('@user');

            if (storageIsAuthenticated && storageUserName) {
                setIsAuthenticated(true)
                setUserName(storageUserName)
            }
        }
     
        loadStorageData()

   },[]) 

// aqui tem que ajeitar para poder puxar as informações da API
    function signIn(email, password){
        if (email === "marcelle@gmail.com" && password === "123456"){
            localStorage.setItem('@authenticated', true)
            localStorage.setItem('@user', "Marcelle")
            setIsAuthenticated(true)
            setUserName("Marcelle")
            return
        }
    }

    function signOut() {
        setIsAuthenticated(false)
        setUserName("")
        localStorage.clear()
    }

    return(
        <AuthContext.Provider
        // tudo o que por dentro de value o código pode acessar pelo useContext
            value={{
                isAuthenticated,
                signIn,
                signOut,
                userName
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;