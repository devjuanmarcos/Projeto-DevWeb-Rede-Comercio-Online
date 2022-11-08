import { Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { CartState } from "../../context/Context";


export function Cart(){
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  const [qty, setQty] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.valor_unitario) * curr.qty, 0)
    );
  }, [cart]);

  console.log(qty)

  

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
                  <select 
                    // type={"range"}
                              
                    // value={}
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
                    {[...Array(prod.qtd_estoque).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </select>
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