import Produto from "../pages/Produto/Produto";
import { Route, Routes } from "react-router-dom";

import Cart from "../pages/Carrinho/Carrinho";

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Produto />} />
            <Route path="/carrinho" element={<Cart/>} />
        </Routes>)
}

