import { useContext } from "react";
import AuthContext from "../../context/Auth";

export function Home() {
    const { signOut, userName } = useContext(AuthContext)

    return (
        <div>
            <h1>Olá {userName}</h1>
            <button onClick={() => signOut ()}>Sair</button>
        </div>
    )
}