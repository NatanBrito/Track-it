import styledComponents from "styled-components";
import Logo from "../../assets/imgs/Group.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
export default function TelaInicial() {
  const component = <ThreeDots height={45} color={'white'} width={50}/>
  const [animationButton,setAnimationButton]=useState(true)
  return (
    <Container>
      <LogoTipo>
        <img src={Logo} alt="aaa" />
      </LogoTipo>
      <form>
        <AlinhamentoInputButton>
          <input className="input" type="email" placeholder="  email"></input>
          <input
            className="input"
            type="password"
            placeholder="  senha"
          ></input>
          <button onClick={()=>{setAnimationButton(!animationButton)}} type="submit">{animationButton? "Entrar" : component}</button>
          <Link to="/cadastro">
          <span className="cadastro">Não tem uma conta? Cadastre-se!</span>
          </Link>
        </AlinhamentoInputButton>
      </form>
    </Container>
  );
}
const Container = styledComponents.div`

display:flex;
flex-direction:column;
button{
    width:303px;
    height: 45px;
    margin-top:5px;
    margin-bottom:20px;
    border-radius: 5px;
    border:none;
    background-color:#52B6FF;
    color: white;
    cursor:pointer;
    font-family: 'Lexend Deca';
    font-style: normal;
    display:flex;
    justify-content:center;
    align-items:center;
}
button:hover{
    background-color:#0b7ccc;
    transition: 0.5s;

}
`;
const AlinhamentoInputButton = styledComponents.div`
display:flex;
align-items:center;
flex-direction:column;
.cadastro{
    color:#52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
}
`;
const LogoTipo = styledComponents.div`
display:flex;
justify-content:center;
margin-top:70px;
img{
width:180px;
}
`;
