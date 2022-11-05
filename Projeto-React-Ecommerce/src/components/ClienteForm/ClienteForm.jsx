import { Container } from "./clienteFormStyled"
import { useState } from "react"

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
      props(cliente)
   }

   return (
      <Container>
         <form>
            <h2>Cadastro</h2>
            <div className="campos-cadastro">
               <div className="user-box">
                  <input
                     type="text"
                     name="nome"
                     placeholder="Digite se nome completo"
                     onChange={e => setCliente({ ...cliente, nome_completo: e.target.value })}
                  />
                  <label>Nome Completo</label>
               </div>

               <div className="user-box">
                  <input
                     type="email"
                     name="email"
                     placeholder="Digite seu email"
                     onChange={e => setCliente({ ...cliente, email: e.target.value })}
                  />
                  <label>Email</label>
               </div>

               <div className="user-box">
                  <input
                     name="cpf"
                     placeholder="Digite seu cpf (apenas número)"
                     onChange={e => setCliente({ ...cliente, cpf: e.target.value })}
                  />
                  <label>CPF</label>
               </div>

               <div className="user-box">
                  <input
                     name="data-nascimento"
                     placeholder="25/12/0000"
                     onChange={e => setCliente({ ...cliente, data_nascimento: e.target.value })}
                  />
                  <label>Data de Nascimento</label>
               </div>
               <div className="user-box">
                  <input
                     name="tel"
                     placeholder="Digite seu telefone (apenas número)"
                     onChange={e => setCliente({ ...cliente, telefone: e.target.value })}
                  />
                  <label>Telefone</label>
               </div>

               <div className="user-box">
                  <input
                     name="Cep"
                     type="text"
                     placeholder="Digite seu Cep (apenas número)"
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
                     type="text"
                     placeholder="Digite o número da sua residência"
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
                     placeholder="Digite complemento, se houver"
                     onChange={e =>
                        setCliente({
                           ...cliente,
                           enderecos: cliente.enderecos.map(endereco => {
                              return { ...endereco, complemento: e.target.value }
                           }),
                        })
                     }
                  />
                  <label>Complemento</label>
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
