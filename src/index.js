import TelaInicial from "./components/telaInicial/TelaInicial";
import Cadastro from "./components/cadastro/Cadastro";
import Habitos from "./components/habitos/Habitos";
import react from "react";
import reactDom from "react-dom";
// importar rotas e montar as rotas 
function App(){
    return(
        <>
        <TelaInicial />
        </>
    )
}
reactDom.render(<App />, document.querySelector(".root"))
