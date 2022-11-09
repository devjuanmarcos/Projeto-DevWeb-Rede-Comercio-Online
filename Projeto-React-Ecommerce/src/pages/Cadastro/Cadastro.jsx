import { useNavigate } from "react-router-dom"
import { ClienteForm } from "../../components/ClienteForm/ClienteForm"
import { Container } from "./cadastroStyled"
import clienteService from "../../services/requests/clienteService"
import { toast } from "react-toastify"
import NavBar from "../../components/NavBar/NavBar";

export function Cadastro() {
   const navigate = useNavigate()

   function postCliente(cliente) {
      const loading = toast.loading("...cadastrando")

      clienteService
         .postCliente(cliente)
         .then(response => {
            console.log(response)
            toastieSuccess(loading)
         })
         .catch(error => {
            console.log(error)
            error.response.status === 400 ? toastieError400(loading) : toastieError500(loading)
         })
   }

   async function toastieSuccess(loading) {
      let timeout = 3500;
        toast.update(loading, {
         render: "Legal! Você já está cadastrado! Vamos levar você para o Login",
         type: "success",
         autoClose: timeout,
         isLoading: false,
         closeButton: true,
         closeOnClick: true,

      })

      setTimeout(() => {
        navigate("/login")
      }, timeout); 
   }

   function toastieError400(loading) {
      toast.update(loading, {
         render: "Opa, algo de errado não está certo. Cheque seu cadastro",
         type: "error",
         isLoading: false,
         closeButton: true,
         closeOnClick: true,
      })
   }

   function toastieError500(loading) {
      toast.update(loading, {
         render: "Opa, algo de errado não está certo. Cheque seu cadastro",
         type: "error",
         isLoading: false,
         closeButton: true,
         closeOnClick: true,
      })
   }

   return (
      <> 
      <NavBar />
      <Container>
         <ClienteForm props={postCliente} />
      </Container>
      </>
   )
}
