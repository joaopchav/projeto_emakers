import { Routes, Route } from "react-router-dom";
import Registro from "../src/pages/Registro";
import Login from "../src/pages/Login";
import RecuperarConta from "./pages/RecuperarConta";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperarconta" element={<RecuperarConta />} />
    </Routes>
  );
}

export default App;
