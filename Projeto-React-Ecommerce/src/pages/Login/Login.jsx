import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../context/Auth"
import { Container, Content } from "./LoginStyled"

export function Login() {
    const { signInDB } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn() {
        signInDB(email, password)
    }

    return (
        <Container>
            <Content>
                <h2>Login</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <label>E-mail</label>
                    </div>

                    <div class="user-box">
                        <input type="password" name="" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <label>Password</label>
                    </div>

                    <div class="button-form">
                        <a id="submit" onClick={handleSignIn}>
                            Entrar
                        </a>


                        <div id="register">
                            Ainda não tem uma conta ?
                            <Link to="/cadastro" >
                                Registre-se
                            </Link>
                        </div>
                    </div>
                </form>
            </Content>
        </Container>
    )
}