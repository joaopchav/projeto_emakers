import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carrossel";
import imagem1 from "../assets/jogo1.webp";
import imagem2 from "../assets/jogo2.jpg";
import imagem3 from "../assets/jogo3.webp";
import imagem4 from "../assets/jogo4.avif";
import imagem5 from "../assets/jogo5.jpeg";
import imagem6 from "../assets/jogo6.jpg";
import imagem7 from "../assets/jogo7.jpg";
import imagem8 from "../assets/jogo8.jpg";

const imagensCarrossel = [
  { imagem: imagem1, desconto: "-15%", preco: "R$ 169,90", link: "/jogo" },
  { imagem: imagem2, desconto: "-25%", preco: "R$ 149,99" },
  { imagem: imagem3, desconto: "-40%", preco: "R$ 119,95" },
];

const imagensLancamentos = [
  { imagem: imagem4, preco: "R$ 299,99" },
  { imagem: imagem5, preco: "R$ 249,99" },
  { imagem: imagem6, preco: "R$ 229,90" },
  { imagem: imagem7, preco: "R$ 279,90" },
  { imagem: imagem8, preco: "R$ 299,99" },
];

function TelaInicial() {
  return (
    <div>
      <Navbar />

      <div className="carrosselPrincipal">
        <Carousel id="carrosselPrincipal" items={imagensCarrossel} />
      </div>

      <div className="lançamentos">
        <div className="TituloLançamentos_PaginaInicial">Lançamentos</div>
        <Carousel id="carrosselLancamentos" items={imagensLancamentos} isLancamentos={true} />
      </div>

      <Footer />
    </div>
  );
}

export default TelaInicial;