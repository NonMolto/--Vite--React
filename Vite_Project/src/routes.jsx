import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/sobre";
import Projetos from "./pages/projetos";
import Contatos from "./pages/contatos";

function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/sobre" element={ <Sobre /> } />
            <Route path="/projetos" element={ <Projetos /> } />
            <Route path="/contatos" element={ <Contatos /> } />
        </Routes>
    );
}

export default AppRoutes;
