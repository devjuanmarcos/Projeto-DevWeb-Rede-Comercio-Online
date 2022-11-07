import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { CartState } from "../../context/Context";


const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.valor_unitario) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div >
      <div>
      
          {cart.map((prod) => (
            <div key={prod.id_produto}>              
                <div>
                  <span>{prod.nome}</span>
                </div>
                <div>R${prod.valor_unitario}</div>               
                <div>
                  <input  
                    type={"range"}
                    min={1}
                    max={15}                 
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id_produto,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {/* {[...Array(prod).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))} */}
                  </input>
                </div>
                <div>
                  <button                   
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <Trash size={25} />
                  </button>
                </div>
              
            </div>
          ))}
      </div>
      <div >
        <span >Subtotal ({cart.length}) itens</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: {total}</span>
        <button disabled={cart.length === 0}>
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Cart;