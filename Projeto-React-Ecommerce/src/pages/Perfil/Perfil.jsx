import { Container } from "./perfilStyled"
import { InfoCliente } from "../../components/InfoClientesPerfil/InfoCliente"
import { InfoEditavel } from "../../components/InfoEditavel/InfoEditavel"
import { BarraOpcoes } from "../../components/BarraOpcoesPerfil/BarraOpcoes"
import { PedidosHistory } from "../../components/PedidosHistory/PedidosHistory"
import { useState } from "react"

export function Perfil() {
   const [editMode, setEditMode] = useState(false)
   const [pedidos, setPedidos] = useState(false)

   function togglePedidos(){
      setPedidos(stateAtual => !stateAtual)
   }

   function toggleEditMode(){
      setEditMode(stateAtual => !stateAtual)
   }
   
   return (
      <Container>
         <BarraOpcoes togglePedidos={togglePedidos}/>
         {  pedidos ? <PedidosHistory/> :
            editMode ? <InfoEditavel edit={toggleEditMode}/> : <InfoCliente edit={toggleEditMode}/>}
      </Container>
   )
}
