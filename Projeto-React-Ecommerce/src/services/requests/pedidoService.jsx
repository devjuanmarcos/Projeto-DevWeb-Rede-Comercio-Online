import { api } from "../api/api";

const getAllPedidos = () => {
    return api.get(`/pedidos`)
}

const getPedidoById = (id) => {
    return api.get(`/pedidos/${id}`)
}

const postPedido = (pedido) => {
    return api.post(`/pedidos`, pedido)
}

const putPedido = (id, pedido) => {
    return api.put(`/pedidos/${id}`, pedido)
}

export default {
    getAllPedidos,
    getPedidoById,
    postPedido,
    putPedido
}