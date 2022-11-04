import { useContext, useState } from "react"
import AuthContext from "../../context/auth"

export function Login() {
    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSingIn(){
        signIn(email, password)
    }

    return (
        <div
            style={{
                display: "flex",
                height: "90vh",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>

            <h1>Login</h1>
            <input 
                sttyle={{marginTop: 10, padding: 5}} 
                placeholder="E-mail"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
            />
            <input 
                sttyle={{marginTop: 10, padding: 5}} 
                placeholder="senha"
                value={password}
                onChange={(e)=> setPassword(e.target.value)} 
            />
            <button 
                onClick={handleSingIn}
                style={{ marginTop: 10, padding: 5, cursor: 'poniter'}}>Entrar</button>
        </div>
    )
}