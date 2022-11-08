import { api } from "../api/api";

const getAllProdutos = () => {
    return api.get(`produtos`)
}

const getProdutoById = (id) => {
    return api.get(`/cliente/${id}`)
}

const postProduto = (cliente) => {
    return api.post(`/cliente`, cliente)
}

const patchProduto = (id, cliente) => {
    return api.patch(`/cliente/${id}`, cliente)
}
export default {
    getAllProdutos,
    getProdutoById,
    postProduto,
    patchProduto
}