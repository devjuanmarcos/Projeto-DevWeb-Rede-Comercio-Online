import { api } from "../api/api";

const getAllPedidos = () => {
    return api.get(`pedido`)
}

const getPedidoById = (id) => {
    return api.get(`/pedido/${id}`)
}

const postPedido = (pedido) => {
    return api.post(`/pedido`, pedido)
}

const putPedido = (id, pedido) => {
    return api.put(`/pedido/${id}`, pedido)
}

export default {
    getAllPedidos,
    getPedidoById,
    postPedido,
    putPedido
}