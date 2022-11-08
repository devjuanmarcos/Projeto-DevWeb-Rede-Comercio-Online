export function Pedidos({ pedido }) {
   const itemPedido = pedido.itemPedido

   return (
      <table>
         <thead>
            <th>id</th>
            <th>Data Pedido</th>
            <th>Data Envio</th>
            <th>Data Entrega</th>
            <th>Status</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Valor</th>
         </thead>
         <tbody>
            {itemPedido.map((item) => {
               <tr>
                  <td>{pedido.id_pedido}</td>
                  <td>{pedido.data_pedido}</td>
                  <td>{pedido.data_envio}</td>
                  <td>{pedido.data_entrega}</td>
                  <td>{pedido.status}</td>
                  <td>{item.produto.nome}</td>
                  <td>{item.quantidade}</td>
                  <td>{item.valorLiquido}</td>
               </tr>
            })}
         </tbody>
      </table>
   )
}
