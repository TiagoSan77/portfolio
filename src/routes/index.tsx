import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "../pages/Principal";
import Conteudos from "../pages/Conteudos";
import MeusProjetos from "../pages/ProjetosPessoais";
import Projetos from "../pages/ProjetosFatec";
import Sobre from "../pages/Sobre";

export default function Rota() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Principal />} />
                <Route path="/" element={<Principal />} />
                <Route path="/inicio" element={<Principal />} />
                <Route path="/conteudos" element={<Conteudos />} />
                <Route path="/projetos/fatec" element={<Projetos />} />
                <Route path="/projetos/meusprojetos" element={<MeusProjetos />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    )
}