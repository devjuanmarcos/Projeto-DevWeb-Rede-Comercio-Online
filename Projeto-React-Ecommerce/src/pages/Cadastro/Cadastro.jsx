import { Container, Form } from "./cadastroStyled"

export function Cadastro(){
    return(
        <Container>
            <Form method="post">
                <div className="row">
                    <label for="nome">Nome Completo</label>
                    <input type="text" name="nome"/>
                </div>

                <div className="row">
                    <label for="email">Email</label>
                    <input type="email" name="email"/>
                </div>
                
                <div className="row">
                    <label for="cpf">CPF</label>
                    <input type="text" name="cpf"/>
                    <label for="data-nascimento">Data de Nascimento</label>
                    <input type="date" name="data-nascimento"/>
                </div>

                <div className="row">
                    <label for="telefone">Telefone</label>
                    <input type="tel" name="telefone" />
                    
                    <button type="submit">Cadastrar</button>
                    <button type="reset">Limpar Campos</button>
                </div>
            </Form>
        </Container>
    )
}