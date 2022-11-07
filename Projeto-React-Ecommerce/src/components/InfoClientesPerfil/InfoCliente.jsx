import { useEffect } from "react";
import clienteService from "../../services/requests/clienteService";
import { useContext } from "react";
import AuthContext from "../../context/Auth";

export function InfoCliente(){
    const { user, setUser } = useContext(AuthContext)

    function clientDataFetch(){
        clienteService.getClienteById(localStorage.getItem("@userId"))
        .then(response =>{
           console.log(response.data);
            setUser(response.data)
            
        }).catch(error =>{
           console.log(error);
        })
     }
     
        useEffect(() =>{
           clientDataFetch();
     
        },[])
        
    return(
        <h1>Aqui vai ter um input pra rolar o PATCH</h1>
    )
}