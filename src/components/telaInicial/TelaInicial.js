import styledComponents from "styled-components";
import Logo from "../../assets/imgs/Group.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
export default function TelaInicial() {
  const Navigate = useNavigate();
  const component = <ThreeDots height={45} color={"white"} width={50} />;
  const [infoInputs, setInfoInputs] = useState({ email: "", password: "" });
  const [animationButton, setAnimationButton] = useState(true);
  function apagaInfos() {
    setInfoInputs({ email: "", password: "" });
    setAnimationButton(true);
  }
  function infoPost(e) {
    e.preventDefault();
    setAnimationButton(false);
    const post =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const objPost = {
      email: infoInputs.email,
      password: infoInputs.password,
    };
    const promise = axios.post(post, objPost);
    promise.then((response) => {
      const LocalToken = localStorage.setItem("token", response.data.token);
      const LocalImage = localStorage.setItem("image", response.data.image);
      Navigate("/hoje");
    });
    promise.catch((err) => {
      alert(" informações inválidas... ");
      apagaInfos();
    });
  }
  return (
    <Container>
      <LogoTipo>
        <img src={Logo} alt="aaa" />
      </LogoTipo>
      <form onSubmit={infoPost}>
        <AlinhamentoInputButton>
          <input
            className="input"
            type="email"
            value={infoInputs.email}
            onChange={(e) => {
              setInfoInputs({ ...infoInputs, email: e.target.value });
            }}
            placeholder="  email"
            required
          ></input>
          <input
            className="input"
            type="password"
            value={infoInputs.password}
            onChange={(e) => {
              setInfoInputs({ ...infoInputs, password: e.target.value });
            }}
            placeholder="  senha"
            required
          ></input>
          <button type="submit">
            {animationButton ? "Entrar" : component}
          </button>
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
span{
  margin-bottom:50px;

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
