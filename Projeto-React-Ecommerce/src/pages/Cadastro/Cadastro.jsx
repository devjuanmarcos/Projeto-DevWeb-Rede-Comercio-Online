import { useNavigate } from "react-router-dom"
import { ClienteForm } from "../../components/ClienteForm/ClienteForm"
import { Container } from "./cadastroStyled"
import clienteService from "../../services/requests/clienteService"
import { toast } from "react-toastify";
import { useState } from "react";

export function Cadastro() {
   const navigate = useNavigate()
   const [errorStatus, setErrorStatus] = useState();

   function postCliente(cliente) {
       const loading = toast.loading("...cadastrando")
        
      clienteService
         .postCliente(cliente)
         .then(response => {
            response.status !== 201 ? setErrorStatus(response.status) : null;

            console.log(response)
            toastieNotifySuccess();
         })
         .catch(error => {
            console.log(error)

            errorStatus === 400 ? toastieNotifyError400() : toastieNotifyError500();
         })
              
    }

    function redirecionarLogin(){
        navigate("/");
    }   

    function toastieNotifySuccess() {
        toast.update( loading, {render: "Legal! Você já está cadastrado!", type: "success", isLoading: false});
    }

    function toastieNotifyError400(){
        toast.error("Opa, algo de errado não está certo. Cheque seu cadastro",{
            position: toast.POSITION.TOP_RIGHT
        } );
    }
    
    function toastieNotifyError500() {
        toast.error(loading,{render: "Bom...isso é embaraçoso...houve algo errado nos nossos servidores", type: "error", isLoading: false });
    }
    
   return (
      <Container>
         <ClienteForm props={postCliente} />
      </Container>
   )
}
