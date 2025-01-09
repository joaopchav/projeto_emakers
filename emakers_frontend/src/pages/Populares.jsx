import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Populares() {
  return (
    <div>
      <Navbar />
        <div>
            <div className="Titulo_Populares_Lançamentos">Populares</div>
        </div>
        
        <div className="Populares_Container">
            <div className="Imagem_Container">
                <div className="Badge_Posicao">1°</div>
                <img
                    src="../src/assets/jogo1.webp"
                    className="Imagem_Populares"
                    alt="God of War"
                />
            </div>
            <div>
                <div className="SubTitulo_Populares">God of War</div>
                <p className="Conteudo_Populares">
                Kratos é pai novamente. Como mentor e protetor de Atreus, um filho
                determinado a ganhar seu respeito, ele é forçado a encarar e controlar a
                fúria que há muito tempo o define enquanto viaja por um mundo ameaçador
                com o seu filho. Com a vingança contra os deuses do Olimpo no passado,
                Kratos agora vive no reino das divindades e monstros nórdicos. É nesse
                mundo duro e impiedoso que ele deve lutar para sobreviver enquanto ensina
                seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do
                Fantasma de Esparta.
                </p>
            </div>
        </div>

        <div className="Populares_Container">
            <div>
                <div className="SubTitulo_Populares">Horizon Zero Dawn</div>
                <p className="Conteudo_Populares">
                Nesta edição remasterizada de Horizon Zero Dawn, o premiado jogo de RPG e ação, o deslumbrante mundo 
                de Aloy ganha vida com uma fidelidade visual ainda maior e todo o potencial do console PlayStation®5. 
                Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou 
                as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes 
                tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que 
                parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.  
                </p>
            </div>
            <div className="Imagem_Container">
                <div className="Badge_Posicao">2°</div>
                <img
                    src="../src/assets/jogo2.jpg"
                    className="Imagem_Populares"
                    alt="Horizon Zero Dawn"
                />
            </div>
        </div>

        <div className="Populares_Container">
            <div className="Imagem_Container">
                <div className="Badge_Posicao">3°</div>
                <img
                    src="../src/assets/jogo3.avif"
                    className="Imagem_Populares"
                    alt="Days Gone"
                />
            </div>
            <div>
                <div className="SubTitulo_Populares">Days Gone</div>
                <p className="Conteudo_Populares">
                Você tem a habilidade — e a coragem — para sobreviver aos horrores de uma 
                realidade devastada neste jogo de ação e aventura com um mundo aberto imenso?
                Entre na pele do antigo motociclista fora da lei Deacon St. John, um caçador 
                de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. 
                Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens 
                e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida 
                honestamente... ou de formas mais violentas. Com a humanidade devastada por uma 
                pandemia global e assolada por criaturas ferozes conhecidas como Freakers, qualquer 
                erro pode ser o último enquanto você tenta colocar sua vida nos trilhos no hostil 
                deserto do Noroeste Pacífico. 
                </p>
            </div>
        </div>
      <Footer />
    </div>
  );
}

export default Populares;
