import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css'; // Certifique-se que o caminho para o arquivo CSS está correto
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Jogo() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <Navbar />
      <div className="Jogo_Container">
        <div className="Imagem_Container_Jogo">
          <div className="Badge_Posicao_Jogo">98%</div>
          <img
            src="../src/assets/jogo1.webp"
            className="Imagem_Jogo"
            alt="God of War"
          />
          <div className="price-tags-Jogo">
          <span className="desconto">-20%</span>
            <span className="preço-atual">R$ 199,99</span>
          </div>
        </div>
        <div className="Texto_Jogo">
          <h3>God of War</h3>
          <p>
            Com a vingança contra os deuses do Olimpo em um passado distante,
            Kratos agora vive como um mortal no reino nórdico, onde explora
            um novo mundo de mitos e monstros. Prepare-se para a aventura que
            irá desafiar suas habilidades e sua coragem.
          </p>
          <p>
            ______________________________
          </p>
          <div className="botao-container">
            <button className="btn">Adicionar ao Carrinho</button>
            <button className="btn">Solicitar Reembolso</button>
          </div>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
                onClick={() => handleStarClick(index)}
              >
                ★
              </span>
            ))}
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jogo;
