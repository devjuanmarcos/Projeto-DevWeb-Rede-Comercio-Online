import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { cartReducer } from "./Reducers";
import produtoService from "../services/requests/produtoService"; 

const Cart = createContext();
// faker.seed(99);


 const Context = ({ children }) => {

    //Colocar os produtos da API aqui    

    const products = [...Array()].map(() => ({
        id_produto: "",
        nome: "",
        valor_unitario: "",
        image: "",
        qty:1
    }));
    

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     produtoService.getAllProdutos().then(response => {
    //         // console.log(response);
    //         setProducts(response.data)
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }, []);

    // console.log(products);

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
      });
      console.log(products)

return (
    <Cart.Provider value={{state, dispatch}} >
        {children}
    </Cart.Provider>
)}
export const CartState = () => {
    return useContext(Cart);
  };

export default Context;