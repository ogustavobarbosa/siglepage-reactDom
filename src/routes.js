import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import Post from "pages/Post";
import NaoEncontrado from "pages/NaoEncontrado";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    
      <Menu/>

      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path="/sobremim" element={<AboutMe/>} />
        </Route>

        <Route path="/post/:id" element={<Post/>} />
        <Route path="*" element={<NaoEncontrado/>} />

      </Routes>

      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
