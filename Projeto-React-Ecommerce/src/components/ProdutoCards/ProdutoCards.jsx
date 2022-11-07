import {CartState } from "../../context/Context"


const ProdutoCards = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <div >
      <div>
        <div style={{ paddingBottom: 20 }}>
          <div>{prod.nome}</div>
          <div >
            <span>{prod.valor_unitario}</span>         
          </div>
          {cart.some((p) => p.id_produto === prod.id_produto) ? (
            <button              
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remover do carrinho
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }             
            >   
            Adicionar ao carrinho          
            </button>
          )}
        </div>  
        </div>    
    </div>
  );
};

export default ProdutoCards;