import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../context/auth";

export function Router(){
    const {isAuthenricated} = useContext(AuthContext)

    if (!isAuthenricated) {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<Login />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}