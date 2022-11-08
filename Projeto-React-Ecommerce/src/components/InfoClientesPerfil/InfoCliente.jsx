import { useEffect, useContext } from "react"
import clienteService from "../../services/requests/clienteService"
import AuthContext from "../../context/Auth"
import { Container, EditableContent } from "./InfoClienteStyle"

export function InfoCliente({ edit }) {
   const { user, setUser, userId, setUserId } = useContext(AuthContext)

   function handleEdit() {
      edit()
   }

   useEffect(() => {
      setUserId(localStorage.getItem("@userId"))
      clientDataFetch()
   }, [])

   const endereco = user.enderecos[0]

   function clientDataFetch() {
      clienteService
         .getClienteById(userId)
         .then(response => {
            setUser(response.data)
         })
         .catch(error => {
            console.log(error)
         })
   }

   return (
      <Container>
         <form>
            <h2>Dados Pessoais</h2>
            <div className="user-box">
               <input type="text" name="nome" value={user.nome_completo} readOnly />
               <label>Nome Completo</label>
            </div>

            <div className="user-box">
               <input type="email" value={user.email} readOnly />
               <label>Email</label>
            </div>

            <div className="user-box">
               <input value={user.cpf} readOnly />
               <label>CPF</label>
            </div>

            <div className="user-box">
               <input value={user.data_nascimento} readOnly />
               <label>Data de Nascimento</label>
            </div>
            <div className="user-box">
               <input value={user.telefone} readOnly />
               <label>Telefone</label>
            </div>
         </form>

         <form>
            <h2>Endereço</h2>
            <EditableContent>
               <div className="user-box">
                  <input name="Cep" type="text" value={endereco?.cep} readOnly />
                  <label>CEP</label>
               </div>
               <div className="user-box">
                  <input type="text" value={endereco?.numero} readOnly/>
                  <label>Numero</label>
               </div>
            </EditableContent>

            <div className="user-box">
               <input disable type="text" placeholder="sim" value={endereco?.complemento} readOnly />
               <label>Complemento (se houver)</label>
            </div>
            <EditableContent>
               <div className="user-box">
                  <input type="text" value={endereco?.rua} readOnly />
                  <label>Rua</label>
               </div>
               <div className="user-box">
                  <input disabled type="text" value={endereco?.bairro} readOnly />
                  <label>Bairro</label>
               </div>
            </EditableContent>
            <EditableContent>
               <div className="user-box">
                  <input disabled type="text" value={endereco?.cidade} readOnly />
                  <label>Cidade</label>
               </div>
               <div className="user-box">
                  <input disabled type="text" value={endereco?.uf} readOnly />
                  <label>Estado</label>
               </div>
            </EditableContent>

            <div className="button-form">
               <button id="submit" onClick={handleEdit}>
                  Editar
               </button>
            </div>
         </form>
      </Container>
   )
}
