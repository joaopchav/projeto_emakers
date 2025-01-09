import { Routes, Route } from "react-router-dom";
import Registro from "../src/pages/Registro";
import Login from "../src/pages/Login";
import RecuperarConta from "./pages/RecuperarConta";
import TelaInicial from "./pages/telaInicial";
import Conta from "../src/pages/Conta";
import Lançamentos from "../src/pages/Lançamentos";
import Populares from "../src/pages/Populares";
import Generos from "../src/pages/Generos";
import Promoção from "../src/pages/Promoção";
import Jogo from "../src/pages/Jogo";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperarconta" element={<RecuperarConta />} />
      <Route path="/telaInicial" element={<TelaInicial />} />
      <Route path="/conta" element={<Conta />} />
      <Route path="/lançamentos" element={<Lançamentos />} />
      <Route path="/populares" element={<Populares />} />
      <Route path="/generos" element={<Generos />} />
      <Route path="/promoção" element={<Promoção />} />
      <Route path="/jogo" element={<Jogo />} />
    </Routes>
  );
}

export default App;
