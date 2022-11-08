import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Content, Container } from "./ContatoStyled";

export function Contato() {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <NavBar />
      <Container>
        <Content>
          <div>
            <form>
              <h2>Contato</h2>
              <div className="campos-cadastro">
                <div className="user-box">
                  <input required type="text" name="nome" />
                  <label>Nome Completo</label>
                </div>

                <div className="user-box">
                  <input required type="email" name="email" />
                  <label>Email</label>
                </div>

                <div className="user-box">
                  <input name="tel" />
                  <label>Telefone</label>
                </div>
                <label></label>
                <textarea className="user-box">Mensagem:</textarea>
              </div>
            </form>
          </div>
        </Content>
      </Container>
    </>
  );
}
