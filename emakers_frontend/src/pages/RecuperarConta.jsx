import "../global.css";
import imagem1 from "../assets/imagem1.png";
import setaImagem from '../assets/seta.png';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bloco-principal">
      <div className="bloco-informações">
        <div className="Titulo">Recuperar Conta</div>
        <input type="text" placeholder="Email" />
        
        <Link to="/telaInicial" className="seta-direita">
          <img src={setaImagem} alt="Seta" />
        </Link>

        <Link to="/">Criar Conta</Link>
        <Link to="/login">Fazer Login</Link>
      </div>

      <div className="bloco-imagem">
        <img src={imagem1} alt="Imagem decorativa" />
      </div>
    </div>
  );
}

export default Login;
