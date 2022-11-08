import { useState, useContext, useEffect } from "react"
import AuthContext from "../../context/Auth"
import { Pedidos } from "../Pedidos/Pedidos"
import pedidoService from "../../services/requests/pedidoService"

export function PedidosHistory() {
   const { user } = useContext(AuthContext)

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
    <div>
        {pedidosCLiente.map((pedido) =>{
            <Pedidos pedido={ pedido }/>
        })}
    </div>
   )
}
