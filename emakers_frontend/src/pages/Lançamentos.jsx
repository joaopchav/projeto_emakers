import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Lançamentos() {
  return (
    <div>
      <Navbar />
        <div>
            <div className="Titulo_Populares_Lançamentos">Lançamentos</div>
        </div>
        
        <div className="Lançamentos_Container">
            <div className="Imagem_Container">
                <div className="Badge_Posicao_Lançamento">1°</div>
                <img
                    src="../src/assets/jogo4.avif"
                    className="Imagem_Lançamentos"
                    alt="God of War"
                />
            </div>
            <div className="Imagem_Container">
                <div className="Badge_Posicao_Lançamento">2°</div>
                <img
                    src="../src/assets/jogo5.jpeg"
                    className="Imagem_Lançamentos"
                    alt="Horizon Zero Dawn"
                />
            </div>
        </div>

        <div className="Lançamentos_Container">
            
            <div className="Imagem_Container">
                <div className="Badge_Posicao_Lançamento">3°</div>
                <img
                    src="../src/assets/jogo6.jpg"
                    className="Imagem_Lançamentos"
                    alt="Horizon Zero Dawn"
                />
            </div>
            <div className="Imagem_Container">
                <div className="Badge_Posicao_Lançamento">4°</div>
                <img
                    src="../src/assets/jogo7.jpg"
                    className="Imagem_Lançamentos"
                    alt="Horizon Zero Dawn"
                />
            </div>
        </div>

        <div className="Lançamentos_Container">
            <div className="Imagem_Container">
                <div className="Badge_Posicao_Lançamento">5°</div>
                <img
                    src="../src/assets/jogo8.jpg"
                    className="Imagem_Lançamentos"
                    alt="Days Gone"
                />
            </div>
            <div className="Imagem_Container">
                <div className="Badge_Posicao_Lançamento">6°</div>
                <img
                    src="../src/assets/jogo3.avif"
                    className="Imagem_Lançamentos"
                    alt="Days Gone"
                />
            </div>
        </div>
      <Footer />
    </div>
  );
}

export default Lançamentos;
