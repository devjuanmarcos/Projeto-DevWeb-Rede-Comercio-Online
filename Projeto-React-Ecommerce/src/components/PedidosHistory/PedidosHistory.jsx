import { useState, useContext, useEffect } from "react"
import AuthContext from "../../context/Auth"
import { Pedido } from "../Pedidos/Pedidos"
import clienteService from "../../services/requests/clienteService"
import pedidoService from "../../services/requests/pedidoService"

export function PedidosHistory() {
   const { user } = userContext(AuthContext)

   const [listaPedidos, setListaPedidos] = useState([])
   const [pedidosCLiente, setPedidosCliente] = ([])

   useEffect(() => {
      clientPedidosFetch()
   }, [])

   function clientPedidosFetch() {
      pedidoService
         .getAllPedidos()
         .then(response => {
            setListaPedidos(response.data)
            listaPedidos.map(pedido =>{
                if(pedido.cliente.id_cliente === user.id_cliente){
                    setPedidosCliente(pedido);
                }
            })
         })
         .catch(error => {
            console.log(error)
         })
   }

   return ( 
    <Container>
        {pedidosCLiente.map((pedido) =>{
            <Pedido pedido={pedido}/>
        })}
    </Container>
   )
}
