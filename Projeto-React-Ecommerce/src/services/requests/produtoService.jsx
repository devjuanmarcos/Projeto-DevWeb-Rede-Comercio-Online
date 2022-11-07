import { api } from "../api/api";

const getAllProdutos = () => {
    return api.get(`produtos`)
}

export default {
    getAllProdutos
}