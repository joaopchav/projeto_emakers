import "../global.css";
import imagem1 from "../assets/imagem1.png";
import setaImagem from '../assets/seta.png';
import { Link } from "react-router-dom";

function Promoção() {
  return (
    <div className="bloco-principal">
      <div className="bloco-informações">
        <div className="Titulo">PROMOÇÂO</div>
        <input type="text" placeholder="Nome de Usuário" />
        <input type="password" placeholder="Senha" />

        <Link to="/telaInicial" className="seta-direita">
          <img src={setaImagem} alt="Seta" />
        </Link>
        
          <Link to="/">Criar Conta</Link>
          <Link to="/recuperarconta">Esqueceu a senha?</Link>

      </div>

      <div className="bloco-imagem">
        <img src={imagem1} alt="Imagem decorativa" />
      </div>

    </div>
  );
}

export default Promoção;
