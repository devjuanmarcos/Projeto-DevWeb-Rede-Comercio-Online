import { api } from "../api/api";

const getAllClientes = () => {
    return api.get(`clientes`)
}

const getClienteById = (id) => {
    return api.get(`/cliente/${id}`)
}

export default {
    getAllClientes,
    getClienteById,
}