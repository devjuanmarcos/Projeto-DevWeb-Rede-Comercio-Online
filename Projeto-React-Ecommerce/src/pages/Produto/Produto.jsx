import ProdutoCards from "../../components/ProdutoCards/ProdutoCards";
import { CartState } from "../../context/Context";
import { useState, useEffect } from "react";
import produtoService from "../../services/requests/produtoService"; 
import { useNavigate } from "react-router-dom";

export const Produto = () => {
    const navigate = useNavigate();

    // const {
    //     state: { products },
    // } = CartState();

    
     const [produtinhos, setProdutinhos] = useState([]);

    useEffect(() => {
        produtoService.getAllProdutos().then(response => {
            setProdutinhos(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, [produtinhos]);

    console.log(produtinhos)
    
    return (
        <div>
            <h1 style={{ width:'100%', color:'white' }}>Produtos</h1>
            <div style={{ display: 'flex',  textAlign:'center', background:'black', width:'100vw', height:'100vh', justifyContent:"space-between"}}>
            {
                produtinhos.map(prod => {
                    return (
                        <ProdutoCards prod={prod} key={prod.id_produto} />
                    )
                })
            }
            </div>
        </div>
    )

}
export default Produto;