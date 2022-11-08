import {ShoppingCart} from 'phosphor-react'
import {Link} from 'react-router-dom'
import { CartState } from "../../context/Context";


export function Header() {   
 
    const {
      state: { cart },      
    } = CartState();

    return (
      <button > 
         <Link to="/carrinho">       
        <ShoppingCart size={25}/>
        <div>{cart.length}</div>
       </Link>
      </button>
    )
 }