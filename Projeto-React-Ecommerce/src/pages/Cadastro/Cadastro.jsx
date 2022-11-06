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
            toast.update(loading, { render: "Legal! Você já está cadastrado!", type: "success", isLoading: false })
         })
         .catch(error => {
            console.log(error)
            toast.error(loading, {
               render: "Opa, algo de errado não está certo. Cheque seu cadastro",
               type: "error",
               isLoading: false,
            })
         })
   }

   function redirecionarLogin() {
      navigate("/")
   }

   return (
      <Container>
         <ClienteForm props={postCliente} />
      </Container>
   )
}
