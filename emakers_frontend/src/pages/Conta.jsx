import React from "react";
import "../global.css";
import Navbar from "../components/Navbar";

import imagem1 from "../assets/jogo5.jpeg";
import imagem2 from "../assets/jogo6.jpg";
import imagem3 from "../assets/jogo7.jpg";
import imagem4 from "../assets/jogo8.jpg";

function Conta() {
  return (
    <div>
      <Navbar />
      <div className="bloco-principal">
        <div className="bloco-informações_conta">
          <div className="Titulo_Conta">Olá, Nome de Usuario</div>
          <div className="SubTitulo_Conta">
            <p>Seu email é nomeusuario@email.com</p>
            <p>Seu CPF é 123.456.678-90</p>
          </div>
          <div className="botoes-conta">
            <button className="botao-conta">Alterar Conta</button>
            <button className="botao-conta">Excluir Conta</button>
            <button className="botao-conta_admin">Tela do Admin</button>
          </div>
        </div>

        <div className="bloco-imagem_conta">
          <h2 className="titulo-jogos-adquiridos">Jogos Adquiridos:</h2>
          <div className="imagens-grid">
            <div className="imagem-item">
              <img src={imagem1} alt="Imagem 1" className="grid-image" />
              <p className="nota-avaliacao">100/100</p>
            </div>
            <div className="imagem-item">
              <img src={imagem2} alt="Imagem 2" className="grid-image" />
              <p className="nota-avaliacao">95/100</p>
            </div>
            <div className="imagem-item">
              <img src={imagem3} alt="Imagem 3" className="grid-image" />
              <p className="nota-avaliacao">90/100</p>
            </div>
            <div className="imagem-item">
              <img src={imagem4} alt="Imagem 4" className="grid-image" />
              <p className="nota-avaliacao">85/100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conta;
