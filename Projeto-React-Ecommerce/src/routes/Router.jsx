import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../context/Auth";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

export function Router(){
    const {isAuthenticated} = useContext(AuthContext)

    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}