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

const patchCliente = (id, cliente) => {
    return api.patch(`/cliente/${id}`, cliente)
}

export default {
    getAllClientes,
    getClienteById,
    postCliente,
    patchCliente
}