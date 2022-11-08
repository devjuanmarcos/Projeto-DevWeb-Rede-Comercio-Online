import { api } from "../api/api";

const getAllClientes = () => {
    return api.get(`cliente`)
}

const getClienteById = (id) => {
    return api.get(`/cliente/${id}`)
}

const postCliente = (cliente) => {
    return api.post(`/cliente`, cliente)
}

const putCliente = (id, cliente) => {
    return api.put(`/cliente/${id}`, cliente)
}

export default {
    getAllClientes,
    getClienteById,
    postCliente,
    putCliente
}