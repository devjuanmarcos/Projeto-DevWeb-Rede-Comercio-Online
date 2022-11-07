import ProdutoCards from "../../components/ProdutoCards/ProdutoCards";
import { CartState } from "../../context/Context";
import { useState, useEffect } from "react";
import produtoService from "../../services/requests/produtoService"; 

export const Produto = () => {
    const {
        state: { products },
    } = CartState();


     const [produtinhos, setProdutinhos] = useState([]);

    useEffect(() => {
        produtoService.getAllProdutos().then(response => {
            // console.log(response);
            setProdutinhos(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, []);

    console.log(produtinhos)
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Produtos</h1>

            {
                produtinhos.map(prod => {
                    return (
                        <ProdutoCards prod={prod} key={prod.id_produto} />
                    )
                })
            }
        </div>
    )

}
export default Produto;