import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const jogos = [
  {
    id: 1,
    nome: "God of War",
    imagem: "../src/assets/jogo1.webp",
    genero: "Ação e Aventura",
    descricao: "Kratos é pai novamente... enquanto viaja por um mundo ameaçador com o seu filho.",
  },
  {
    id: 2,
    nome: "Horizon Zero Dawn",
    imagem: "../src/assets/jogo2.jpg",
    genero: "RPG de Ação",
    descricao: "Aloy parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.",
  },
  {
    id: 3,
    nome: "Days Gone",
    imagem: "../src/assets/jogo3.avif",
    genero: "Ação e Aventura",
    descricao: "Sobreviva aos horrores de uma realidade devastada enquanto busca uma razão para viver.",
  },
  {
    id: 4,
    nome: "SpongeBob SquarePants: Battle for Bikini Bottom",
    imagem: "../src/assets/jogo4.avif",
    genero: "Plataforma",
    descricao: "Mergulhe em aventuras subaquáticas com Bob Esponja e amigos para salvar a Fenda do Biquíni.",
  },
  {
    id: 5,
    nome: "Deliver Us Mars",
    imagem: "../src/assets/jogo5.jpeg",
    genero: "Ficção Científica",
    descricao: "Explore Marte em uma jornada emocionante para recuperar tecnologias cruciais para a humanidade.",
  },
  {
    id: 6,
    nome: "SpellForce Reforced",
    imagem: "../src/assets/jogo6.jpg",
    genero: "RPG de Ação",
    descricao: "Combine estratégia e RPG enquanto lidera exércitos e constrói seu império.",
  },
  {
    id: 7,
    nome: "Death Stranding",
    imagem: "../src/assets/jogo7.jpg",
    genero: "Ação e Aventura",
    descricao: "Viva uma experiência única em um mundo pós-apocalíptico enquanto reconecta a humanidade.",
  },
  {
    id: 8,
    nome: "Perish",
    imagem: "../src/assets/jogo8.jpg",
    genero: "RPG de Ação",
    descricao: "Lute contra criaturas macabras em uma jornada sombria até o submundo.",
  },
];


function Generos() {
  const generos = [...new Set(jogos.map(jogo => jogo.genero))]; // Identificar os gêneros únicos

  return (
    <div>
      <Navbar />
      <div>
        <div className="Generos_Titulo">Gêneros</div>
      </div>

      {generos.map((genero, index) => (
        <div key={index} className={`${genero.replace(/\s/g, '_')}_Container`}>
          <h2 className={`${genero.replace(/\s/g, '_')}_Titulo`}>{genero}</h2>
          <div className={`${genero.replace(/\s/g, '_')}_Grid_Container`}>
            {jogos
              .filter(jogo => jogo.genero === genero)
              .map(jogo => (
                <div key={jogo.id} className={`${genero.replace(/\s/g, '_')}_Jogo_Container`}>
                  <div className={`${genero.replace(/\s/g, '_')}_Imagem_Container`}>
                    <img
                      src={jogo.imagem}
                      className={`${genero.replace(/\s/g, '_')}_Imagem_Genero`}
                      alt={jogo.nome}
                    />
                  </div>
                  <div className={`${genero.replace(/\s/g, '_')}_Descricao_Container`}>
                    <div className={`${genero.replace(/\s/g, '_')}_SubTitulo_Generos`}>{jogo.nome}</div>
                    <p className={`${genero.replace(/\s/g, '_')}_Conteudo_Generos`}>{jogo.descricao}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default Generos;
