import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../src/assets/imagem2.png" alt="Logo" className="footer-logo-img" />
          <p className="footer-description">Seu próximo jogo começa aqui</p>
        </div>
        <div className="footer-links">
          <h4>Explorar</h4>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Populares</a></li>
            <li><a href="#">Conta</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contato</h4>
          <ul>
            <li>Email: <a href="mailto:gameamedame@teste.com">gameamedame@teste.com</a></li>
            <li>Telefone: (99) 9 9999-9999</li>
            <li>Local: Shopping X, Lavras - MG</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 Game Dame | By Emakers Júnior
      </div>
    </footer>
  );
}

export default Footer;
