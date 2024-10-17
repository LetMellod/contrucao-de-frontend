import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Erro404 from "./pages/Erro404";
import Layout from "./pages/Layout";

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route pach="/Perfil/:id" element={<Perfil />} />
      <Route path="*" element={<Erro404 />} />
      <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/perfil/1" element={<Perfil />} />
      </Route>

    </Routes>  
    </BrowserRouter>
  );
}

export default App;