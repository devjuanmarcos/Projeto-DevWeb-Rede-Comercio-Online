import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Content,
  Text,
  Copyright
} from "./FooterStyled";
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Sobre</Heading>
            <Text class="text-justify">
              Projeto do Grupo 5 de Desenvolvimento Web 
            </Text>
          </Column>
          <Column>
            <FooterLink href="#">Nome Categoria</FooterLink>
            <FooterLink href="#">Nome Categoria</FooterLink>
            <FooterLink href="#">Nome Categoria</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">F.A.Q.s</FooterLink>
            <FooterLink href="#">Politica de privacidade</FooterLink>
            <FooterLink href="#">Termos e condições</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Entre em contato</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <hr></hr>
        <Content>
          <div class="copyright">
            <Copyright>Copyright &copy; 2022 All Rights Reserved by Grupo5</Copyright>
			<img src={Logo} alt="logo" />
          </div>
        </Content>
      </Container>
    </Box>
  );
};
export default Footer;

