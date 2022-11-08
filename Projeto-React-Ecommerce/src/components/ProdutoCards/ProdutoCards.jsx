import { CartState } from "../../context/Context"
import { Container } from "./ProdutoCardsStyled";


const ProdutoCards = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <Container>
      <div>
        <div className="insideCard">
          <p>{prod.nome}</p>
          <p>{prod.valor_unitario}</p>

          {cart.some((p) => p.id_produto === prod.id_produto) ? (
            <button
            style={{backgroundColor:'red'}}
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
              disabled={prod.qtd_estoque <1}
            >
              {prod.qtd_estoque <1 ? "Estoque esgotado" : "Adicionar ao carrinho"}
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProdutoCards;