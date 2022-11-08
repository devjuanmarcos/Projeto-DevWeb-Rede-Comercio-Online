import { Container } from "./barraOpcoesStyled"
import AuthContext from "../../context/Auth"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export function BarraOpcoes({ togglePedidos }) {
   const { user, setUser, userId, setUserId } = useContext(AuthContext)
   const navigate = useNavigate()

    function handlePedidos(){
        togglePedidos()
    }

   function redirecionarHome() {
      navigate("/")
   }

   return (
      <Container>
         <h1>Olá {user.nome_completo}</h1>
         <div className="btn-menu">
            <button onClick={handlePedidos}>Dados Pessoais</button>
            <button onClick={handlePedidos}>Pedidos</button>
         </div>
         <div className="voltar">
            <button onClick={redirecionarHome}>Voltar</button>
         </div>
      </Container>
   )
}
