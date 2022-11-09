import { useState, useEffect, useContext } from "react"
import clienteService from "../../services/requests/clienteService"
import AuthContext from "../../context/Auth"
import { Container, EditableContent } from "./InfoEditavelStyle"

export function InfoEditavel({ edit }) {
   const { user, setUser, userId, setUserId } = useContext(AuthContext)
   
   const endereco = user.enderecos[0];

   const [userNewInfo, setUserNewInfo] = useState({
      nome_completo: user.nome_completo,
      cpf: user.cpf,
      email: user.email,
      telefone: user.telefone,
      data_nascimento: user.data_nascimento,
      enderecos: [
         {
            cep: endereco.cep,
            numero: endereco.numero,
            complemento: endereco.complemento,
         },
      ],
   })
   

   useEffect(() => {
      setUserId(localStorage.getItem("@userId"))
      clientDataFetch()
   }, [])

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

   function patchUserNewInfo(id, userUpdate) {
      clienteService.putCliente(id, userUpdate).then(response=>{
         console.log(response.data);
         alert("funcionou seu PUT")
      }).catch(error=>{
         console.log(error)
      })
   }

   function handleUserNewInfoPatch(event) {
      patchUserNewInfo(userId, userNewInfo)
      event.preventDefault()
      edit()
   }

   return (
      <Container>
         <form>
            <div className="form-box">
               <h2>Dados Pessoais</h2>
               <div className="user-box">
                  <input
                     type="text"
                     name="nome"
                     placeholder={user.nome_completo}
                     onChange={e => setUserNewInfo({ ...userNewInfo, nome_completo: e.target.value })}
                  />
                  <label>Nome Completo</label>
               </div>

               <div className="user-box">
                  <input
                     type="email"
                     placeholder={user.email}
                     onChange={e => setUserNewInfo({ ...userNewInfo, email: e.target.value })}
                  />
                  <label>Email</label>
               </div>

               <div className="user-box">
                  <input
                     placeholder={user.cpf}
                     onChange={e => setUserNewInfo({ ...userNewInfo, cpf: e.target.value })}
                  />
                  <label>CPF</label>
               </div>

               <div className="user-box">
                  <input
                     placeholder={user.data_nascimento}
                     onChange={e => setUserNewInfo({ ...userNewInfo, data_nascimento: e.target.value })}
                  />
                  <label>Data de Nascimento</label>
               </div>
               <div className="user-box">
                  <input
                     placeholder={user.telefone}
                     onChange={e => setUserNewInfo({ ...userNewInfo, telefone: e.target.value })}
                  />
                  <label>Telefone</label>
               </div>
            </div>
            <div className="form-box">
               <h2>Endereço</h2>
               <EditableContent>
                  <div className="user-box">
                     <input
                        name="Cep"
                        type="text"
                        placeholder={endereco?.cep}
                        onChange={e =>
                           setUserNewInfo({
                              ...userNewInfo,
                              enderecos: userNewInfo.enderecos.map(endereco => {
                                 return { ...endereco, cep: e.target.value }
                              }),
                           })
                        }
                     />
                     <label>CEP</label>
                  </div>
                  <div className="user-box">
                     <input
                        type="text"
                        placeholder={endereco?.numero}
                        onChange={e =>
                           setUserNewInfo({
                              ...userNewInfo,
                              enderecos: userNewInfo.enderecos.map(endereco => {
                                 return { ...endereco, numero: e.target.value }
                              }),
                           })
                        }
                     />
                     <label>Numero</label>
                  </div>
               </EditableContent>
               <EditableContent>
               <div className="user-box">
                  <input
                     type="text"
                     placeholder={endereco?.complemento}
                     onChange={e =>
                        setUserNewInfo({
                           ...userNewInfo,
                           enderecos: userNewInfo.enderecos.map(endereco => {
                              return { ...endereco, complemento: e.target.value }
                           }),
                        })
                     }
                  />
                  <label>Complemento (se houver)</label>
               </div>
               </EditableContent>
               <EditableContent>
                  <div className="user-box">
                     <input
                        type="text"
                        value={endereco?.rua}
                        readOnly
                     />
                     <label>Rua</label>
                  </div>
                  <div className="user-box">
                     <input
                        type="text"
                        value={endereco?.bairro}
                        readOnly
                     />
                     <label>Bairro</label>
                  </div>
               </EditableContent>
               <EditableContent>
                  <div className="user-box">
                     <input
                        disabled
                        type="text"
                        value={endereco?.cidade}
                        readOnly
                     />
                     <label>Cidade</label>
                  </div>
                  <div className="user-box">
                     <input
                        disabled
                        type="text"
                        value={endereco?.uf}
                        readOnly
                     />
                     <label>Estado</label>
                  </div>
               </EditableContent>

               <div className="button-form">
                  <button id="submit" onClick={handleUserNewInfoPatch}>
                     Salvar
                  </button>
               </div>
            </div>
         </form>
      </Container>
   )
}
