import { useNavigate } from "react-router-dom"
import { ClienteForm } from "../../components/ClienteForm/ClienteForm"
import { Container } from "./cadastroStyled"
import clienteService from "../../services/requests/clienteService"
import { toast } from "react-toastify"

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

   function redirecionarLogin() {
      navigate("/")
   }

   function toastieSuccess(loading) {
      toast.update(loading, {
         render: "Legal! Você já está cadastrado!",
         type: "success",
         isLoading: false,
         closeButton: true,
         closeOnClick: true,
      })
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
      <Container>
         <ClienteForm props={postCliente} />
      </Container>
   )
}
