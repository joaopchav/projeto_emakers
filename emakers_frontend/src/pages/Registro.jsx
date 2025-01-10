import "../global.css";
import imagem1 from '../assets/imagem1.png';
import setaImagem from '../assets/seta.png';
import { Link } from "react-router-dom";

function Registro() {
  return (
    <div className="bloco-principal">
      

      <div className="bloco-informações">
        <h1 className="Titulo">Registrar</h1>
        <input type="text" placeholder="Nome de Usuário" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="CPF" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />

        <Link to="/telaInicial" className="seta-direita">
          <img src={setaImagem} alt="Seta" />
        </Link>

        <Link to="/login" className="link">Fazer Login</Link>
        
      </div>

      <div className="bloco-imagem">
        <img src={imagem1} alt="Imagem de registro" />
      </div>
    </div>
  );
}

export default Registro;
