
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./components/telaInicial/TelaInicial";
import Cadastro from "./components/cadastro/Cadastro";
import Habitos from "./components/habitos/Habitos";
import react from "react";
import reactDom from "react-dom";
import "./assets/styles/reset.css"
import "./assets/styles/style.css"

// importar rotas e montar as rotas 
function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastro" element={<Cadastro />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
reactDom.render(<App />, document.querySelector(".root"))
