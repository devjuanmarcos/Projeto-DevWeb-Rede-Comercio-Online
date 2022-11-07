import { Container } from "./perfilStyled"
import { InfoCliente } from "../../components/InfoClientesPerfil/InfoCliente"
import { BarraOpcoes } from "../../components/BarraOpcoesPerfil/BarraOpcoes"

export function Perfil() {
   
   return (
      <Container>
         <BarraOpcoes/>
         <InfoCliente/>
      </Container>
   )
}
