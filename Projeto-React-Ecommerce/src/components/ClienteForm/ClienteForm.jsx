import { Container } from "./clienteFormStyled"
import { useState } from "react"
import { toast } from "react-toastify"

export function ClienteForm({ props }) {
   const [cliente, setCliente] = useState({
      nome_completo: "",
      email: "",
      cpf: "",
      telefone: "",
      data_nascimento: "",
      enderecos: [
         {
            cep: "",
            numero: 0,
            complemento: "",
         },
      ],
   })

   function handleSubmit(event) {
      event.preventDefault()
      !cliente.nome_completo ? toast.warning("Por favor preencha seu Nome Completo") : null
      !cliente.email ? toast.warning("Por favor preencha seu Email") : null
      !cliente.cpf ? toast.warning("Por favor preencha seu Cpf (apenas números)") : null
      !cliente.enderecos[0].cep ? toast.warning("Por favor preencha o CEP (apenas números)") : null
      !cliente.enderecos[0].numero ? toast.warning("Por favor preencha o Numero do seu endereço") : null

      props(cliente)
   }

   return (
      <Container>
         <form>
            <h2>Cadastro</h2>
            <div className="campos-cadastro">
               <div className="user-box">
                  <input
                     required
                     type="text"
                     name="nome"
                     onChange={e => setCliente({ ...cliente, nome_completo: e.target.value })}
                  />
                  <label>Nome Completo</label>
               </div>

               <div className="user-box">
                  <input
                     required
                     type="email"
                     name="email"
                     onChange={e => setCliente({ ...cliente, email: e.target.value })}
                  />
                  <label>Email</label>
               </div>

               <div className="user-box">
                  <input required name="cpf" onChange={e => setCliente({ ...cliente, cpf: e.target.value })} />
                  <label>CPF</label>
               </div>

               <div className="user-box">
                  <input
                     name="data-nascimento"
                     onChange={e => setCliente({ ...cliente, data_nascimento: e.target.value })}
                  />
                  <label>Data de Nascimento</label>
               </div>
               <div className="user-box">
                  <input name="tel" onChange={e => setCliente({ ...cliente, telefone: e.target.value })} />
                  <label>Telefone</label>
               </div>

               <div className="user-box">
                  <input
                     required
                     name="Cep"
                     type="text"
                     onChange={e =>
                        setCliente({
                           ...cliente,
                           enderecos: cliente.enderecos.map(endereco => {
                              return { ...endereco, cep: e.target.value }
                           }),
                        })
                     }
                  />
                  <label>CEP</label>
               </div>
               <div className="user-box">
                  <input
                     required
                     type="text"
                     onChange={e =>
                        setCliente({
                           ...cliente,
                           enderecos: cliente.enderecos.map(endereco => {
                              return { ...endereco, numero: e.target.value }
                           }),
                        })
                     }
                  />
                  <label>Numero</label>
               </div>
               <div className="user-box">
                  <input
                     type="text"
                     onChange={e =>
                        setCliente({
                           ...cliente,
                           enderecos: cliente.enderecos.map(endereco => {
                              return { ...endereco, complemento: e.target.value }
                           }),
                        })
                     }
                  />
                  <label>Complemento (se houver)</label>
               </div>
            </div>

            <div className="button-form">
               <button id="submit" onClick={handleSubmit}>
                  Cadastrar
               </button>
               <button id="reset" type="reset">
                  Limpar Campos
               </button>
            </div>
         </form>
      </Container>
   )
}
