import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Erro404 from "../../pratica07/src/pages/Erro404";

function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Perfil/:id" element={<Perfil />} />
      <Route path="*" element={<Erro404 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;