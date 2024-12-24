import { Routes, Route } from "react-router-dom";
import Registro from "../src/pages/Registro";
import Login from "../src/pages/Login";
import RecuperarConta from "./pages/RecuperarConta";
import TelaInicial from "./pages/telaInicial";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperarconta" element={<RecuperarConta />} />
      <Route path="/telaInicial" element={<TelaInicial />} />
    </Routes>
  );
}

export default App;
