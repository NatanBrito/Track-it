
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./components/telaInicial/TelaInicial";
import Cadastro from "./components/cadastro/Cadastro";
import Habitos from "./components/habitos/Habitos";
import Hoje from "./components/hoje/Hoje";
import Historico from "./components/historico/Historico";
import react from "react";
import reactDom from "react-dom";
import "./assets/styles/reset.css"
import "./assets/styles/style.css"
import TokenProvider from "./context/Token";
import ImageProvider from "./context/imgHeader";
function App(){
    return(
        <>
        <TokenProvider>
        <ImageProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/habitos" element={<Habitos />}/>
        <Route path="/hoje" element={<Hoje />}/>
        <Route path="/historico" element={<Historico />}/>   
        </Routes>
        </BrowserRouter>
        </ImageProvider>
        </TokenProvider>
        </>
    )
}
reactDom.render(<App />, document.querySelector(".root"))
