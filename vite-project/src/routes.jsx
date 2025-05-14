import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "pages/Sobre";
import Projetos from "pages/Projetos";
import Contatos from "pages/Contatos";

function AppRoutes () {
    return (
    
    < BrowserRouter> 
        <Routes>
            <Route path= "/" element = { <Home />}></Route>
            <Route path="/Sobre" element = { <Sobre /> }> </Route> 
            <Route path="/Projetos" element = { <Projetos /> }> </Route> 
            <Route path="/Contatos" element = { <Contatos /> }> </Route>
        </Routes>
    </ BrowserRouter>
    )
}

export default AppRoutes