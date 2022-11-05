import { ClienteForm } from "../../components/ClienteForm/ClienteForm"
import { Container } from "./cadastroStyled"
import clienteService from "../../services/requests/clienteService"

export function Cadastro(){

    function postCliente(cliente){
        clienteService.postCliente(cliente).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }

    return(
        <Container>
            <ClienteForm submit={postCliente}/>
        </Container>
    )
}